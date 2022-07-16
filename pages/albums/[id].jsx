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

export function mixItems(base, added, number) {
  const mixed = []
  let addedCount = 0
  base.forEach((item, i) => {
    mixed.push(item)

    if (i % number === 0) {
      mixed.push(added[addedCount])
      addedCount++
    }
  })
  return mixed
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { albums } = ALBUMS
  const { quotes } = QUOTES
  const album = albums[id]
  const items = mixItems(album.photos, quotes, 12)

  return { props: { items } }
}

export default function AlbumPage(props) {
  const { items } = props

  return (
    <Layout>
      {!items && <Spinner />}
      {items && <Album items={items} />}
    </Layout>
  )
}
