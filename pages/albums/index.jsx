import useSWR from 'swr'
import Layout from '../../components/app/Layout'
import Albums from '../../components/photos/Albums'
import Spinner from '../../components/app/Spinner'

export default function AlbumsPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: albums } = useSWR('/api/albums', fetcher)

  return (
    <Layout>
      {!albums && <Spinner />}
      {albums && <Albums albums={albums} />}
    </Layout>
  )
}
