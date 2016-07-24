import React from 'react';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import SocialNetworks from 'components/SocialNetworks';
import Navigation from 'components/Navigation';
import ProfileImage from 'components/ProfileImage';
import 'css/landing.scss';

const SiteIndex = () => (
    <div className="landing">
    <div className="landing__cover">
      <ProfileImage src="pam-brewing.jpg"
        style={{
          margin: '0 auto',
          maxWidth: '200px',
          maxHeight: '200px',
        }}
      />
      <h1>{config.authorName}</h1> spends more time tweaking the
      CSS and markup of this blog than writing.
      <SocialNetworks
        style={{
          marginTop: rhythm(1),
          fontSize: rhythm(1),
        }}
      />
    </div>
    <Navigation />
    </div>
  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
