import ALBUMS from '../../public/albums/albums.json'
import QUOTES from '../../public/albums/quotes.json'
import Layout from '../../components/app/Layout'
import Spinner from '../../components/app/Spinner'
import Album from '../../components/photos/Album'

export async function getStaticPaths() {
  const { albums } = ALBUMS

  const paths = []
  albums.forEach((album) => {
    paths.push(`/albums/${album.id}`)
  })

  return { paths: paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { albums } = ALBUMS
  const { quotes } = QUOTES
  const album = albums[id]

  return { props: { album, quotes } }
}

export default function AlbumPage(props) {
  const { album, quotes } = props

  return (
    <Layout>
      {!album && <Spinner />}
      {album && quotes && <Album album={album} quotes={quotes} />}
    </Layout>
  )
}
