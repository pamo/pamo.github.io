import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { link } from 'gatsby-helpers'
import { rhythm, fontSizeToMS } from 'utils/typography'
import { config } from 'config'
import ga from 'react-google-analytics'

import '../css/styles.scss'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    const GaInitializer = ga.Initializer
    ga('create', config.googleAnalyticsId, 'auto')
    ga('send', 'pageview')

    let header
    if (location.pathname === link('/')) {
      header = (
        <h1
          style={{
            fontSize: fontSizeToMS(2.5).fontSize,
            lineHeight: fontSizeToMS(2.5).lineHeight,
            marginBottom: rhythm(1.5),
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={link('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={link('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(2)} ${rhythm(1/2)}`,
        }}
      >
        {header}
        {children}
        <GaInitializer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template