import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';

const ProfileImage = (props) => {
  const { src, style } = props;

  const photosSources = [
    '/pam-wearing-glasses.jpg',
    '/pam-brewing.jpg',
    '/pam-by-the-ocean.jpg',
  ];
  let mergedStyles = Object.assign({
    border: '.25em solid',
    borderColor: '#01A1DD',
    borderRadius: '50%',
    maxWidth: '80px',
    maxHeight: '80px',
  }, style);

  const photoSource = src || sample(photosSources);
  return (
      <img src={ prefixLink(photoSource) }
        alt={trimEnd(replace(photoSource, '-', ' '), '.jpg')}
        style = { mergedStyles }
      />);
};

ProfileImage.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default ProfileImage;
