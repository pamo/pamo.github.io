import React from 'react'
import { prefixLink } from 'gatsby-helpers'

const ProfileImage = (props) => {
  const { src } = props
  return (<img src={ prefixLink(src) } alt="photo of pam"
    style={{
      maxWidth: '80px',
      maxHeight: '80px',
      flexShrink: 0,
      margin: 0,
    }}
  />)
}

ProfileImage.propTypes = {
  src: React.PropTypes.string.isRequired,
}

export default ProfileImage
