/* eslint-disable @next/next/no-img-element */
import data from '../../public/albums/albums.json'
import Layout from '../../components/app/Layout'
import Spinner from '../../components/app/Spinner'
import Image from 'next/image'

export async function getStaticPaths() {
  const { albums } = data

  const paths = []
  albums.forEach((album) => {
    album.photos.forEach((photo) => {
      paths.push(`/photo/${album.id}-${photo.id}`)
    })
  })

  return { paths: paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const IDs = id.split('-')
  const albumID = IDs[0]
  const photoID = IDs[1]

  const { albums } = data
  const photo = albums[albumID].photos[photoID]

  return {
    props: {
      src: photo.big,
      width: photo.width,
      height: photo.height,
    },
  }
}

export default function PhotoPage(props) {
  const { src, width, height } = props

  if (!src || !width || !height) return <Spinner />

  return (
    <img
      className='w-screen h-screen object-contain'
      src={src}
      width={width}
      height={height}
      alt=''
    />
  )
}
