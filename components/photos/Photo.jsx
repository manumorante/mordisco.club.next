import React from 'react'
import Image from 'next/image'
import Spinner from '../app/Spinner'
import Link from 'next/link'

function Photo({ photo }) {
  const [loading, setLoading] = React.useState(true)

  return (
    <Link href={`/photo/${photo.albumID}-${photo.id}`} key={photo.name}>
      <a className='mm-masonry__item Photo' style={{ '--w': photo.width, '--h': photo.height }}>
        <Image
          className='mm-masonry__img'
          src={photo.small}
          width={photo.width}
          height={photo.height}
          loading='lazy'
          alt=''
          onLoadingComplete={() => setLoading(false)}
        />

        {loading && <Spinner />}
      </a>
    </Link>
  )
}

export default Photo
