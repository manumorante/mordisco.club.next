import { server } from '../../config'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { ArrowSmRightIcon, PhotographIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Album(props) {
  const { album } = props
  const date = new Date(album.date)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const total = album.photos.length

  return (
    <>
      <Layout>
        <div className='Album'>
          <div className='flex items-center gap-2 mb-6'>
            <Link href='/albums'>
              <a className='flex items-center gap-1'>
                <PhotographIcon className='w-4 h-4 inline-block' />
                <div>Albums</div>
              </a>
            </Link>

            <ArrowSmRightIcon className='w-4 h-4 inline-block' />

            <span>
              De {month} del {year} con {total} fotos
            </span>
          </div>

          <div className='mm-masonry'>
            {album.photos.map((photo) => {
              return (
                <div
                  key={photo.id}
                  className='mm-masonry__item'
                  style={{ '--w': photo.width, '--h': photo.height }}>
                  <Image
                    className='mm-masonry__img'
                    src={photo.small}
                    width={photo.width}
                    height={photo.height}
                    alt='Photo'
                  />
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
  const { id } = ctx.params
  const res = await fetch(`${server}/api/albums/${id}`)
  const album = await res.json()

  return {
    props: {
      album: album,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/albums/0', '/albums/1'],
    fallback: true,
  }
}
