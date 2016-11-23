import 'css/travel.scss';
import React from 'react';
import { Link } from 'react-router';
import split from 'lodash/split';
import drop from 'lodash/drop';
import dropRight from 'lodash/dropRight';
import { include as includes } from 'underscore.string';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';
import { routeProp } from '../utils/propTypeValidation';
import CountryNames from './travel/_countryNames';

const TravelIndex = (props) => {
  const countries = {};
  const countrySections = [];
  const pages = filter(props.route.pages,
      page => !access(page, 'data.draft') &&
      includes(access(page, 'data.layout'), 'travel'));

  pages.forEach((page) => {
    if (access(page, 'file.ext') === 'md') {
      const city = access(page, 'data.title' || page.path);

      const countryCode = dropRight(drop(split(page.requirePath, '/')), 2);

      countries[countryCode] = countries[countryCode] || [];

      countries[countryCode].push(<li key={page.path}>
        <Link to={prefixLink(page.path)}>{city}</Link>
      </li>);
    }
  });

  map(countries, (cities, countryCode) => {
    countrySections.push(<Container key={countryCode}>
      <h4>{CountryNames[countryCode.toUpperCase()]}</h4>
      <ul
        style={{
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
      <p>A collection of hack guides to the cities I&apos;ve
        had the opportunity to live in and visit.
        The <a href="https://github.com/pamo/pamo.github.io/tree/development/pages/travel" target="_blank" rel="noopener noreferrer">Github repository</a> has a full list including drafts.</p>
      {countrySections}
    </Container>
  );
};

TravelIndex.propTypes = {
  route: routeProp,
};

export default TravelIndex;
