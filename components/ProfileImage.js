import React from 'react'
import { link } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'

class ProfileImage extends React.Component {

  render() {
    const { src } = this.props
    return (<img src={ link(src) } alt="photo of pam"
      style={{
        maxWidth: '80px',
        maxHeight: '80px',
        flexShrink: 0,
        margin: 0,
      }}
    />)
  }
}

ProfileImage.propTypes = {
  src: React.PropTypes.string.isRequired,
}

export default ProfileImage
