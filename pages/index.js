import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-responsive-grid';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import SocialNetworks from 'components/SocialNetworks';
import ProfileImage from 'components/ProfileImage';

const SiteIndex = () => {
  const fullImagePath = `${config.blogUrl}pam-brewing.jpg`;

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
};

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
