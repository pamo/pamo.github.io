import React from 'react';
import { Link } from 'react-router';
import split from 'lodash/split';
import drop from 'lodash/drop';
import dropRight from 'lodash/dropRight';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import access from 'safe-access';
import { Container } from 'react-responsive-grid';

const TravelIndex = (props) => {
  const countries = {};
  const pages = filter(props.route.pages,
      (page) => includes(access(page, 'data.layout'), 'travel'));

  pages.forEach((page) => {
    if (access(page, 'file.ext') === 'md') {
      const title = access(page, 'data.title' || page.path);
      const countryCode = dropRight(drop(split(page.requirePath, '/')), 2);

      countries[countryCode] = countries[countryCode] || [];

      countries[countryCode].push(
        <li key={page.path}>
          <Link to={prefixLink(page.path)}>{title}</Link>
        </li>
      );
    }
  });
  const sections = [];
  map(countries, (cities, country) => {
    sections.push(
        <Container>
        <h4>{country}</h4>
        <ul style={{
          listStyleType: 'none',
          marginTop: rhythm(1),
        }}
        >
        {cities}
        </ul>
        </Container>);
  });

  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(1)}`,
        margin: 'auto',
      }}
    >
    {sections}
    </Container>
  );
};

TravelIndex.propTypes = {
  route: React.PropTypes.object,
};

export default TravelIndex;
