import React from 'react';
import { Container } from 'react-responsive-grid';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import SocialNetworks from 'components/SocialNetworks';
import ProfileImage from 'components/ProfileImage';

const SiteIndex = () => (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(1)}`,
        margin: 'auto',
      }}
    >
      <div className="author">
        <ProfileImage src="pam-brewing.jpg" />
        <div className="author__intro">
          <strong>{config.authorName}</strong> spends more time tweaking the
          CSS and markup of this blog than writing.<br />
          She's active on these social networks: <SocialNetworks />
          </div>
      </div>
    </Container>
  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
