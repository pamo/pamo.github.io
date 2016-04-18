import React from 'react'
import { rhythm } from 'utils/typography'

class Cover extends React.Component {
  render() {
    const { title, image } = this.props

    const photoCoverStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      padding: '2rem 0',
      color: '#FFF',
      display: 'flex',
      height: '95vh',
    }

    return (
      <header style={ image ? photoCoverStyle : {
        maxWidth: rhythm(24),
        padding: `${rhythm(1)}`,
        margin: 'auto',
      } }
      >
      <h1
        style={{
          color: image ? '#FFF' : null,
          margin: 'auto',
          textAlign: image ? 'center' : null,
        }}
      >
        { title }
      </h1>
    </header>)
  }
}

Cover.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.string,
}

export default Cover
