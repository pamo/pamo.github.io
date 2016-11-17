import React from 'react';
import { prefixLink } from 'gatsby-helpers';

const Navigation = () => (<nav>
  <ul>
    <li><a href={prefixLink('blog/')}><h2>Blog</h2></a></li>
    <li><a href={prefixLink('travel/')}><h2>Travel</h2></a></li>
  </ul>
</nav>);

export default Navigation;
