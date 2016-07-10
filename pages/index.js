import React from 'react';
import { config } from 'config';
import SocialNetworks from 'components/SocialNetworks';
import Navigation from 'components/Navigation';
import ProfileImage from 'components/ProfileImage';

const SiteIndex = () => (
    <div className="landing">
    <div className="landing__cover">
      <ProfileImage src="pam-brewing.jpg"
        style={{
          border: '.25em solid',
          borderColor: '#01A1DD',
          borderRadius: '50%',
          margin: '0 auto',
          maxWidth: '200px',
          maxHeight: '200px',
        }}
      />
      <h1>{config.authorName}</h1> spends more time tweaking the
      CSS and markup of this blog than writing.
      <SocialNetworks />
    </div>
    <Navigation />
    </div>
  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
