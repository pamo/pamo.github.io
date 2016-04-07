import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { link } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import SocialNetworks from '../components/SocialNetworks'
import ProfileImage from '../components/ProfileImage'
import { prune } from 'underscore.string'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    let body
    let title
    const fullImagePath = `${config.blogUrl}pam-brewing.jpg`
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md') {
        title = access(page, 'data.title') || page.path
        body = prune(page.data.body.replace(/<[^>]*>/g, ''), 200)

        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
          <Link to={link(page.path)} className="page-link">{title}</Link>
            <p>{ body }</p>
          </li>
        )
      }
    })
    return (
      <div>
        <Helmet
          meta={[
            { property: 'og:url', content: config.blogUrl },
            { property: 'og:type', content: 'blog' },
            { property: 'og:title', content: config.blogTitle },
            { property: 'og:site_name', content: config.blogTitle },
            { property: 'og:image', content: fullImagePath },
            { property: 'fb:admins', content: config.fbAdminsId },
            { name: 'twitter:title', content: config.blogTitle },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: config.authorTwitter },
            { name: 'twitter:creator', content: config.authorTwitter },
            { name: 'twitter:description', content: `${config.authorTwitter} spends more time tweaking the CSS and markup of this blog than writing.`},
            { name: 'twitter:image', content: fullImagePath },
          ]}
          defaultTitle={ config.blogTitle }
        />
        <p
          style={{
            marginBottom: 0,
            display: 'inline',
          }}
          >
          <ProfileImage src="pam-brewing.jpg" />
          <strong>{config.authorName}</strong> spends more time tweaking the
          CSS and markup of this blog than writing.  Not enough to see here?
          Go follow her on almost every social network:</p>
        <SocialNetworks/>
        <ul
          style={{
            marginTop: rhythm(2.5),
            listStyleType: 'none',
          }}
          >
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex