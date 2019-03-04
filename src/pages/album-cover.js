import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Track from '../components/track'
import Layout from '../components/layout'

const AlbumCoverPage = ({ data }) => {
  console.log("data")
  console.log(data)
  const { playlist } = data
  return (
    <Layout>
      <h2><span role="img" aria-label="Eyes">👀</span> Hello from the second page.</h2>
      <p>There are {playlist.totalCount} songs in this playlist</p>
      <div className="ui cards playlists">
        {playlist.edges.map(({ node: playlistTrack }) => (
          <Track key={playlistTrack.spotifyId} data={playlistTrack} />
        ))}
      </div>
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
query SpotifyPlaylistAlbumCover {
  playlist: allSpotifyPlaylistTrack {
    totalCount
    edges {
      node {
        spotifyId
        added_at
        added_by {
          id
          type
          uri
          external_urls {
            spotify
          }
        }
        is_local
        track {
          id
          name
          preview_url
          image {
            localFile {
              childImageSharp {
              fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          album {
            name
            id
            images {
              url
              height
              width
            }
          }
          artists {
            name
          }
          uri
          popularity
          href
          explicit
          duration_ms
        }
        order
      }
    }
  }
}
    `}
    render={data => <AlbumCoverPage data={data} {...props} />}
  />
)