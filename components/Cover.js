import React from 'react';
import { rhythm } from '../utils/typography';

const Cover = (props) => {
  const { title, image, shift } = props;
  const photoCoverStyle = {
    backgroundPosition: `${shift}%` || '0%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    color: '#FFF',
    textShadow: '1px 2px 5px rgba(150, 150, 150, 0.8)',
    display: 'flex',
    height: '95vh',
  };
  const defaultStyle = {
    maxWidth: rhythm(24),
    margin: 'auto',
  };

  return (
    <header style={image ? photoCoverStyle : defaultStyle}>
      <h1
        style={{
          color: image ? '#FFF' : null,
          margin: 'auto',
          textAlign: image ? 'center' : null,
        }}
      >
        { title }
      </h1>
    </header>);
};

Cover.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  shift: React.PropTypes.number,
};

export default Cover;
