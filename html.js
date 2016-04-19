import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
const TypographyStyle = require('utils/typography').TypographyStyle

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
    favicon: React.PropTypes.string,
    title: React.PropTypes.string,
  },
  defaultProps: {
    body: '',
    favicon: 'favicon.ico',
  },
  render() {
    const { favicon, body } = this.props
    const head = Helmet.rewind()
    let cssLink

    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          { head.meta.toComponent() }
          { head.title.toComponent() }
          <link rel="shortcut icon" href={ favicon } />
          <TypographyStyle />
          {cssLink}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})
