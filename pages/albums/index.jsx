import useSWR from 'swr'
import Layout from '../../components/Layout'
import Albums from '../../components/Albums'

export default function AlbumsPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: albums } = useSWR('/api/albums', fetcher)

  return (
    <Layout>
      {!albums && 'Loading albums...'}
      {albums && <Albums albums={albums} />}
    </Layout>
  )
}
