import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import { prune } from 'underscore.string'
import { prefixLink } from 'gatsby-helpers'
import SocialNetworks from '../components/SocialNetworks'
import ProfileImage from '../components/ProfileImage'
import Cover from '../components/Cover'
import { Container } from 'react-responsive-grid'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props
    const post = route.page.data

    const pageUrl = config.blogUrl.slice(0, config.blogUrl.length-1) + prefixLink(post.path)
    const shortDescription = prune(post.body.replace(/<[^>]*>/g, ''), 100).trim()
    const imageMatchPattern = /<img.+src=[\'"]([^\'"]+)[\'"].*>/i
    const hasImage = (post.body).match(imageMatchPattern)
    let header = <Cover title={ post.title } />

    let firstImagePath
    if (post.coverPhoto) {
      header = <Cover title={ post.title } image={ post.coverPhoto } />
    } else if (post.coverPhoto !== "" && hasImage) {
      firstImagePath = pageUrl + hasImage[1]
      header = <Cover title={ post.title } image={ hasImage[1] } />
    }

    return (
      <div className="markdown" >
        <Helmet
          meta={[
            { property: 'og:url', content: pageUrl },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: post.title },
            { property: 'og:description', content: shortDescription },
            { property: 'og:image', content: firstImagePath },
            { name: 'description', content: shortDescription },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: config.authorTwitter },
            { name: 'twitter:creator', content: config.authorTwitter },
            { name: 'twitter:title', content: post.title },
            { name: 'twitter:description', content: shortDescription },
            { name: 'twitter:image', content: firstImagePath },
          ]}
          title={ post.title }
        />
        { header }
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1)}`,
            margin: 'auto',
          }}
        >
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Written {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <div className="author">
          <ProfileImage src="/pam-small.jpg" />
          <div className="author__intro">When not crafting an artisinal vimrc, <strong>{config.authorName}</strong> can be found drinking coffee, riding a bike,
            climbing fake rocks, lifting heavy things, and, in general, wandering around San Francisco.</div>
        </div>
        <SocialNetworks style={{
          display: 'block',
          textAlign: 'center',
        }}
        />
    </Container>
    </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
