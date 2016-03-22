import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
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
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md') {
        const title = access(page, 'data.title') || page.path
        const body = prune(page.data.body.replace(/<[^>]*>/g, ''), 200)

        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
          <Link to={link(page.path)} className='page-link'>{title}</Link>
            <p>{ body }</p>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
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
  </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
