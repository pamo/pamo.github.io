// Inspired by https://github.com/brianjgeiger/markdown-it-video/
/* eslint no-param-reassign:0 */
function instagramEmbed(md) {
  function instagramReturn(state, silent) {
    let photoID = ''

    /* @ */
    if (state.src.charCodeAt(state.pos) !== 0x40) {
      return false
    }
    /* [ */
    if (state.src.charCodeAt(state.pos + 1) !== 0x5B) {
      return false
    }

    const EMBED_REGEX = /@\[(instagram)\]\([\s]*(.*?)[\s]*[\)]/im
    const match = EMBED_REGEX.exec(state.src)
    if (!match) {
      return false
    }
    if (match.length < 3) {
      return false
    }

    const service = match[1]
    photoID = match[2]

    const serviceStart = state.pos + 2
    const serviceEnd = md.helpers.parseLinkLabel(state, state.pos + 1, false)

    if (!silent) {
      state.pos = serviceStart
      state.posMax = serviceEnd
      state.service = state.src.slice(serviceStart, serviceEnd)

      const newState = new state.md.inline.State(
        service,
        state.md,
        state.env,
        []
      )
      newState.md.inline.tokenize(newState)

      const token = state.push('instagram', '')
      token.photoID = photoID
      token.service = service
      token.level = state.level
    }

    state.pos = state.pos + state.src.indexOf(')')
    state.posMax = state.tokens.length
    return true
  }

  return instagramReturn
}

function tokenizePhoto(md) {
  function tokenizeReturn(tokens, idx) {
    const photoID = md.utils.escapeHtml(tokens[idx].photoID)
    const service = md.utils.escapeHtml(tokens[idx].service)

    if (photoID === '') {
      return ''
    }

    if (service.toLowerCase() === 'instagram') {
      const embedStart = '<div class="responsive-iframe"><iframe src="https://instagram.com/p/'
      const embedEnd = '/embed" frameborder="0" allowfullscreen scrolling="no"></iframe></div>'
      return embedStart + photoID + embedEnd
    } else {
      return ('')
    }
  }

  return tokenizeReturn
}

function instagramEmbedPlugin(md) {
  md.renderer.rules.instagram = tokenizePhoto(md)
  md.inline.ruler.before('emphasis', 'instagram', instagramEmbed(md))
}

module.exports = instagramEmbedPlugin
