import React from 'react'
import { link } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'

class ProfileImage extends React.Component {

  render() {
    const { src } = this.props
    return (<img src={ link(src) } alt='photo of pam' style={{ float: 'left', marginRight: rhythm(1/4), marginBottom: 0, width: rhythm(2), height: rhythm(2) }} />)

  }
}

ProfileImage.propTypes = {
  src: React.PropTypes.string.isRequired,
}

export default ProfileImage
