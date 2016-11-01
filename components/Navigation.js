import React from 'react';
import { prefixLink } from 'gatsby-helpers';

const Navigation = (props) => {
  const { style } = props;
  return (
    <nav>
      <ul style={style}>
        <li><a href={prefixLink('blog/')}><h2>Blog</h2></a></li>
        <li><a href={prefixLink('travel/')}><h2>Travel</h2></a></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  style: React.PropTypes.object,
};

export default Navigation;
