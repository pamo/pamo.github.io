import React from 'react'
import DocumentTitle from 'react-document-title'
import { prune } from 'underscore.string'
import { link } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'
import { config } from 'config'

export default class Html extends React.Component {
  render () {
    const { favicon, body } = this.props

    const metaDescription = prune(body.replace(/<[^>]*>/g, ''), 200)
    const metaTitle = config.blogTitle || this.props.title

    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta
            name="viewport"
            content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />

        <meta name="description" content={ metaDescription } />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={ config.blogTitle } />
        <meta name="twitter:creator" content={ config.authorTwitter } />
        <meta name="twitter:title" content={ metaTitle } />
        <meta name="twitter:description" content={ metaDescription }/>

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ metaTitle } />
        <meta property="og:url" content={ config.blogUrl } />
        <meta property="og:description" content={ metaDescription } />
        <meta property="og:site_name" content={ config.blogTitle } />
        <meta property="fb:admins" content={ config.fbAdminsId } />

        <title>{this.props.title}</title>
        <link rel="shortcut icon" href={ favicon } />
        <TypographyStyle/>
        {cssLink}
          </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={link('/bundle.js')}/>
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: React.PropTypes.string,
  favicon: React.PropTypes.string,
  title: React.PropTypes.string,
}

Html.defaultProps = { body: '' }
