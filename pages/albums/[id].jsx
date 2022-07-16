import data from '../../public/albums/albums.json'
import Layout from '../../components/app/Layout'
import Spinner from '../../components/app/Spinner'
import Album from '../../components/photos/Album'

export async function getStaticPaths() {
  return { paths: ['/albums/0', '/albums/1'], fallback: true }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { albums } = data
  const album = albums[id]

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
