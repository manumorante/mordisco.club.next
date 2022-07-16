import React from 'react'
import Image from 'next/image'
import Spinner from '../app/Spinner'

function Photo({ photo }) {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
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
    </>
  )
}

export default Photo
