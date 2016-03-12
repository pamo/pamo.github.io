import React from 'react'
import { rhythm } from 'utils/typography'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import GithubIcon from 'react-icons/lib/fa/github'
import InstagramIcon from 'react-icons/lib/fa/instagram'
import FacebookIcon from 'react-icons/lib/fa/facebook-square'
import FoursquareIcon from 'react-icons/lib/fa/foursquare'

class SocialNetworks extends React.Component {

  render () {
    const marginBetweenIcons = rhythm(1/6)
    return (
      <ul className="social-networks"
        style={{
          margin: rhythm(1/4),
        }}
      >
        <li style={{ margin: marginBetweenIcons }}><a href="http://twitter.com/pmocampo" title="Twitter"><TwitterIcon/></a></li>
        <li style={{ margin: marginBetweenIcons }}><a href="http://instagram.com/pmocampo" title="instagram"><InstagramIcon/></a></li>
        <li style={{ margin: marginBetweenIcons }}><a href="http://github.com/pamo" title="github"><GithubIcon/></a></li>
        <li style={{ margin: marginBetweenIcons }}><a href="http://facebook.com/pamocampo" title="facebook"><FacebookIcon/></a></li>
        <li style={{ margin: marginBetweenIcons }}><a href="http://foursquare.com/pmocampo" title="foursquare"><FoursquareIcon/></a></li>
      </ul>
    )
  }
}

export default SocialNetworks