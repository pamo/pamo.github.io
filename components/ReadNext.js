import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import { find, findIndex } from 'lodash'
import { rhythm, fontSizeToMS } from 'utils/typography'

const ReadNext = (props) => {
  const { pages, post } = props
  const { readNext } = post
  let nextPost
  if (readNext) {
    nextPost = find(pages, (page) =>
                    includes(page.path, readNext)
                   )
  }
  if (!nextPost) {
    const currentIndex = findIndex(pages, (page) => includes(page.path, post.path))
    nextPost = pages[(currentIndex + 1) % (pages.length - 1)]
  } else {
    const bareNextPath = readNext.slice(1, -1)

    nextPost = find(pages, (page) => includes(page.path, bareNextPath))
  }

  // Create pruned version of the body.
  const html = nextPost.data.body
  const body = prune(html.replace(/<[^>]*>/g, ''), 200)

  return (
    <div>
      <h6
        style={{
          margin: 0,
          fontSize: fontSizeToMS(-1).fontSize,
          lineHeight: fontSizeToMS(-1).lineHeight,
          letterSpacing: -0.5,
        }}
      >
        READ THIS NEXT:
      </h6>
      <h3
        style={{
          marginBottom: rhythm(1/4),
        }}
      >
      <Link
        to={{
          pathname: prefixLink(nextPost.path),
          query: {
            readNext: true,
          },
        }}
      >
      {nextPost.data.title}
      </Link>
      </h3>
      <p>{body}</p>
      <hr />
    </div>
  )
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNext
