import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
          <p>
            <img
              src={link('/pam-small.jpg')}
              style={{
                float: 'left',
                marginRight: rhythm(1/4),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
            <strong>{config.authorName}</strong> thrives in San Francisco. You should follow her on <a href="http://twitter.com/pmocampo">Twitter</a>
          </p>
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
