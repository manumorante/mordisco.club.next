import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/app/Layout'
import Spinner from '../../components/app/Spinner'
import Album from '../../components/photos/Album'

export default function AlbumPage() {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: album } = useSWR(`/api/albums/${id}`, fetcher)

  return (
    <Layout>
      {!album && <Spinner />}
      {album && <Album album={album} />}
    </Layout>
  )
}
