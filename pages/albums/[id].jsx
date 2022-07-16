import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/Layout'
import Album from '../../components/Album'

export default function AlbumPage() {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: album } = useSWR(`/api/albums/${id}`, fetcher)

  return (
    <Layout>
      {!album && `Loading album id: ${id}`}
      {album && <Album album={album} />}
    </Layout>
  )
}
