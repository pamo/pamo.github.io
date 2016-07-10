import React from 'react';
import { rhythm } from 'utils/typography';
import {
  FaTwitter as TwitterIcon,
  FaGithub as GithubIcon,
  FaInstagram as InstagramIcon,
  FaFacebook as FacebookIcon,
  FaFoursquare as FoursquareIcon,
  FaGetPocket as PocketIcon,
  FaLastfmSquare as LastFMIcon,
  FaSpotify as SpotifyIcon } from 'react-icons/lib/fa';

const SocialNetworks = (props) => {
  const marginBetweenIcons = rhythm(1/6);
  return (
    <ul className="social-networks"
      style={ props.style }
    >
    <li style={{ margin: marginBetweenIcons }}><a href="http://twitter.com/pmocampo" title="Twitter"><TwitterIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://instagram.com/pmocampo" title="instagram"><InstagramIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://github.com/pamo" title="github"><GithubIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://facebook.com/pamocampo" title="facebook"><FacebookIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://foursquare.com/pmocampo" title="foursquare"><FoursquareIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://getpocket.com/@pmocampo" title="pocket reading list"><PocketIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="https://play.spotify.com/user/pmocampo" title="spotify"><SpotifyIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://last.fm/user/Psyc-adelick" title="last.fm"><LastFMIcon /></a></li>
    </ul>
  );
};

SocialNetworks.propTypes = {
  style: React.PropTypes.object,
};

export default SocialNetworks;
