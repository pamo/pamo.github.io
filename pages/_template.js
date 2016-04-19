import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, fontSizeToMS } from 'utils/typography'
import { config } from 'config'
import { Container } from 'react-responsive-grid'
import ga from 'react-google-analytics'

import '../css/styles.scss'

const Template = (props) => {
  const { location, children } = props
  const GaInitializer = ga.Initializer
  ga('create', config.googleAnalyticsId, 'auto')
  ga('send', 'pageview')

  let header
  if (location.pathname === prefixLink('/')) {
    header = (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1)} 0`,
          margin: 'auto',
        }}
      >
      <h1
        style={{
          fontSize: fontSizeToMS(2.5).fontSize,
          lineHeight: fontSizeToMS(2.5).lineHeight,
          margin: `${rhythm(1/2)}`,
        }}
      >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={prefixLink('/')}
      >
        {config.blogTitle}
      </Link>
      </h1>
      </Container>
    )
  } else {
    header = (
      <h3
        style={{
          maxWidth: rhythm(24),
          padding: rhythm(1/2),
          margin: '0px',
        }}
      >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={prefixLink('/')}
      >
      {config.blogTitle}
    </Link>
  </h3>
    )
  }
  return (
    <div>
      {header}
      {children}
      <GaInitializer />
    </div>
  )
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
