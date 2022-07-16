import ALBUMS from '../../public/albums/albums.json'
import QUOTES from '../../public/albums/quotes.json'
import Layout from '../../components/app/Layout'
import Albums from '../../components/photos/Albums'
import Spinner from '../../components/app/Spinner'

export async function getStaticProps() {
  const { albums } = ALBUMS
  const { quotes } = QUOTES

  return { props: { albums, quotes } }
}

export default function AlbumsPage(props) {
  const { albums, quotes } = props

  return (
    <Layout>
      {!albums && <Spinner />}
      {albums && quotes && <Albums albums={albums} quotes={quotes} />}
    </Layout>
  )
}
