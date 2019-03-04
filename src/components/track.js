import React from 'react'
import Img from 'gatsby-image'
import placeholderImage from '../assets/images/placeholder.png'

const TrackImage = ({ data }) => {
  if (!data.track.image) {
    return (
      <div className="image">
        <img className="ui image" src={placeholderImage} alt="placeholder" />
      </div>
    )
  }
  return (
    <div className="image">
      <Img fluid={data.track.image.localFile.childImageSharp.fluid} />
    </div>
  )
}

const Track = ({ data }) => {
  const { track } = data
  const { artists } = track
  const artistsCount = artists.length
  return (
    <div className="card">
      <TrackImage data={data} />
      <div className="content">
        <div className="header">{track.name}</div>
        <div className="meta">
          {track.album.name}
        </div>
      </div>
      <div className="extra content">
      <span>
        <i className="microphone icon" />
        {artists.map(({ name }) => name).join(' , ')}
      </span>
      </div>
    </div>
  )
}

export default Track