import React from 'react'
import Image from 'next/image'
import Spinner from '../app/Spinner'

function Photo({ photo }) {
  const [loading, setLoading] = React.useState(true)

  return (
    <div
      key={photo.name}
      className='mm-masonry__item Photo'
      style={{ '--w': photo.width, '--h': photo.height }}>
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
    </div>
  )
}

export default Photo
