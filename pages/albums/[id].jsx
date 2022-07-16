import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/Layout'

export default function AlbumPage() {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: album } = useSWR(`/api/albums/${id}`, fetcher)

  return (
    <Layout>
      {!album && `Loading album id: ${id}`}
      {album && (
        <div className='mm-masonry'>
          {album.photos.map((photo) => (
            <div key={photo.name} className='mm-masonry__item'>
              <img className='mm-masonry__img' src={photo.path} alt='' />
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}
