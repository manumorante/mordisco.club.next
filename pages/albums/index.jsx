import { fetchAlbums } from '../../lib/fecher'
import Layout from '../../components/app/Layout'
import Albums from '../../components/photos/Albums'
import Spinner from '../../components/app/Spinner'

export async function getStaticProps() {
  const albums = await fetchAlbums()

  return { props: { albums } }
}

export default function AlbumsPage(props) {
  const { albums } = props

  return (
    <Layout>
      {!albums && <Spinner />}
      {albums && <Albums albums={albums} />}
    </Layout>
  )
}
