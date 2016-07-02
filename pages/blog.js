import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import access from 'safe-access';
import { config } from 'config';
import { prune } from 'underscore.string';
import { Container } from 'react-responsive-grid';

const BlogIndex = (props) => {
  const pageLinks = [];
  let body;
  let title;
  const fullImagePath = `${config.blogUrl}pam-brewing.jpg`;
  // Sort pages.
  const blogPosts = filter(props.route.pages, (page) => includes(page.data.layout, 'post'));
  const sortedPages = sortBy(blogPosts, (page) => access(page, 'data.date')).reverse();

  sortedPages.forEach((page) => {
    if (access(page, 'file.ext') === 'md') {
      title = access(page, 'data.title') || page.path;
      body = prune(page.data.body.replace(/<[^>]*>/g, ''), 200);

      pageLinks.push(
        <li
          key={page.path}
          style={{
            marginBottom: rhythm(1/4),
          }}
        >
          <Link to={prefixLink(page.path)} className="page-link">{title}</Link>
          <p>{ body }</p>
        </li>
      );
    }
  });

  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(1)}`,
        margin: 'auto',
      }}
    >
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
        defaultTitle={ config.blogTitle }
      />
        <ul
          style={{
            listStyleType: 'none',
            marginTop: rhythm(1),
          }}
        >
        {pageLinks}
      </ul>
    </Container>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;
