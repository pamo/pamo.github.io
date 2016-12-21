import React from 'react';
import Helmet from 'react-helmet';
import access from 'safe-access';
import filter from 'lodash/filter';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import { prune, include as includes } from 'underscore.string';
import ReadNext from '../components/ReadNext';
import { rhythm } from '../utils/typography';
import { routeProp } from '../utils/propTypeValidation';
import SocialNetworks from '../components/SocialNetworks';
import ProfileImage from '../components/ProfileImage';
import Cover from '../components/Cover';

import '../css/zenburn.css';
import '../css/markdown.scss';

const pickFirstImage = body => (access(body.match(/<img\b[^>]+?src\s*=\s*['"]?([^\s'"?#>]+)/i), '1'));

const MarkdownWrapper = (props) => {
  const { route } = props;
  const post = route.page.data;
  const pageUrl = config.blogUrl.slice(0, config.blogUrl.length-1) + prefixLink(route.page.path);
  let shortDescription = prune(post.body.replace(/<[^>]*>/g, ''), 100).trim();

  const coverImageFile = ('coverPhoto' in post) ? post.coverPhoto : pickFirstImage(post.body);
  const header = <Cover title={post.title} image={coverImageFile} shift={post.coverPhotoShift} />;
  const metaImageUrl = pageUrl + pickFirstImage(post.body);

  let readNextPost;
  if (post.layout === 'post') {
    const blogPosts = filter(route.pages, page => includes(page.requirePath, 'blog/'));
    readNextPost = <ReadNext post={post} pages={blogPosts} />;
  } else if (post.layout === 'travel') {
    post.title += ' travel guide.';
    shortDescription = `${post.title} ${shortDescription}`;
  }

  return (
    <div>
      <Helmet
        meta={[
          { property: 'og:url', content: pageUrl },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: post.title },
          { property: 'og:description', content: shortDescription },
          { property: 'og:image', content: metaImageUrl },
          { name: 'description', content: shortDescription },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: config.authorTwitter },
          { name: 'twitter:creator', content: config.authorTwitter },
          { name: 'twitter:title', content: post.title },
          { name: 'twitter:description', content: shortDescription },
          { name: 'twitter:image', content: metaImageUrl },
        ]}
        title={`☕️ ${post.title}`}
      />
      { header }
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: rhythm(1),
          margin: 'auto',
        }}
      >
        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.body }} />
        {readNextPost}
        <hr />
        <div className="author">
          <ProfileImage />
          <div className="author__intro">When not crafting an
            artisinal vimrc, <strong>{config.authorName}</strong> can be found drinking coffee,
            riding a bike, climbing fake rocks, lifting heavy things, and, in general, wandering
          </div>
        </div>
        <SocialNetworks />
      </Container>
    </div>
  );
};

MarkdownWrapper.propTypes = {
  route: routeProp,
};

export default MarkdownWrapper;
