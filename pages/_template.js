import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import ga from 'react-google-analytics';
import { trim, capitalize } from 'lodash';
import { rhythm } from '../utils/typography';
import '../css/base.scss';

const Template = (props) => {
  const { location, children } = props;
  const GaInitializer = ga.Initializer;
  const fullImagePath = `${config.blogUrl}pam-brewing.jpg`;
  ga('create', config.googleAnalyticsId, 'auto');
  ga('require', 'linkid');
  ga('send', 'pageview');
  let header;
  let documentTitle = config.blogTitle;
  if (location.pathname === prefixLink('/travel/')) {
    documentTitle = `${documentTitle} :: ${capitalize(trim(location.pathname, '/'))}`;

    header = (
      <Container
        style={{
          maxWidth: rhythm(24),
          margin: 'auto',
        }}
      >
        <h1>
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
      </Container>);
  } else if (location.pathname !== prefixLink('/')) {
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
      </h3>);
  }

  const helmet = (
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
        { name: 'twitter:description', content: `${config.authorTwitter} ${config.blogTitle}` },
        { name: 'twitter:image', content: fullImagePath },
      ]}
      title={documentTitle}
      defaultTitle={config.blogTitle}
    />);


  return (
    <div>
      {helmet}
      {header}
      {children}
      <GaInitializer />
    </div>);
};

Template.propTypes = {
  children: React.PropTypes.shape({}),
  location: React.PropTypes.shape({}),
};

export default Template;
