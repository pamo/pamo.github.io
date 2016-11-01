import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import access from 'safe-access';
import { prune, include as includes } from 'underscore.string';
import { Container } from 'react-responsive-grid';

const BlogIndex = (props) => {
  const pageLinks = [];
  let body;
  let title;
  const blogPosts = filter(props.route.pages, page => includes(page.data.layout, 'post'));
  const sortedPages = sortBy(blogPosts, page => access(page, 'data.date')).reverse();

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
