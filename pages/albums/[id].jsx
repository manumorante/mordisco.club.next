import data from '../../data/albums.json'
// import { fetchAlbum } from '../../lib/fecher'
import Layout from '../../components/app/Layout'
import Spinner from '../../components/app/Spinner'
import Album from '../../components/photos/Album'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { albums } = data
  const album = albums[id]
  // const album = await fetchAlbum(id)

  return { props: { album } }
}

export default function AlbumPage(props) {
  const { album } = props

  return (
    <Layout>
      {!album && <Spinner />}
      {album && <Album album={album} />}
    </Layout>
  )
}
