import { server } from '../../config'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { PhotographIcon } from '@heroicons/react/solid'

export default function Home(props) {
  const { albums } = props

  return (
    <>
      <Layout>
        <div className='Albums'>
          <Link href='/albums'>
            <a className='flex items-center gap-1 mb-4'>
              <PhotographIcon className='w-4 h-4 inline-block' />
              <div>Albums</div>
            </a>
          </Link>

          <div className='flex gap-6'>
            {albums.map((album) => {
              const date = new Date(album.date)
              const month = date.toLocaleString('default', { month: 'long' })
              const total = album.photos.length

              return (
                <div key={album.id}>
                  <Link href={`albums/${album.id}`}>
                    <a className='block border border-slate-700 p-6'>
                      {month}, {total}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${server}/api/albums`)
  const albums = await res.json()

  return {
    props: {
      albums: albums,
    },
  }
}
