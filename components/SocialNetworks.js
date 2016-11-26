import React from 'react';
import map from 'lodash/map';
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaFacebook as Facebook,
  FaFoursquare as Foursquare,
  FaGetPocket as Pocket,
  FaLastfmSquare as Lastfm,
  FaSpotify as Spotify } from 'react-icons/lib/fa';
import { rhythm } from '../utils/typography';
import '../css/social-networks.scss';

const SocialNetworks = (props) => {
  const marginBetweenIcons = rhythm(1/3);
  const networks = {
    facebook: {
      url: 'http://facebook.com/pamocampo',
      icon: Facebook,
    },
    twitter: {
      url: 'http://twitter.com/pmocampo',
      icon: Twitter,
    },
    github: {
      url: 'http://github.com/pamo',
      icon: Github,
    },
    instagram: {
      url: 'http://instagram.com/pmocampo',
      icon: Instagram,
    },
    foursquare: {
      url: 'http://foursquare.com/pmocampo',
      icon: Foursquare,
    },
    pocket: {
      url: 'http://getpocket.com/@pmocampo',
      icon: Pocket,
    },
    lastfm: {
      url: 'http://last.fm/user/Psyc-adelick',
      icon: Lastfm,
    },
    spotify: {
      url: 'https://play.spotify.com/user/pmocampo',
      icon: Spotify,
    },
  };

  const links = map(networks, (network, k) => {
    const iconTitle = `Pam on ${k}`;
    return (
      <a
        key={k}
        href={network.url}
        rel="noopener noreferrer"
        target="_blank"
        title={iconTitle}
        className="social-networks__icon"
        style={{
          fontSize: rhythm(1.5),
        }}
      ><network.icon
        style={{ margin: marginBetweenIcons }}
      /></a>);
  });
  return (
    <div
      className="social-networks"
      style={props.style}
    >
      { links }
    </div>
  );
};

SocialNetworks.propTypes = {
  style: React.PropTypes.shape({}),
};

export default SocialNetworks;
