import { CameraIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const AlbumCard = ({ album }) => {
  const date = new Date(album.date)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const totalPhotos = album.photos.length

  return (
    <Link href={`/albums/${album.id}`}>
      <a className='AlbumCard relative w-96 h-auto rounded-md transition-colors flex flex-col'>
        <Image
          className='rounded-md mb-4'
          src={album.photos[0].small}
          width={384}
          height={384}
          objectFit='cover'
          alt='Cover'
        />

        <div className='relative z-10 p-4 flex justify-between items-center text-neutral-100 bg-black/50'>
          <span className='font-light text-xl capitalize'>{month}</span>
          <div className='flex gap-2'>
            <span>{totalPhotos}</span>
            <CameraIcon className='w-6 h-6' />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default AlbumCard
