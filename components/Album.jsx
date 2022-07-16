import Image from 'next/image'

const Album = ({ album }) => {
  if (!album) return null

  return (
    <div className='mm-masonry'>
      {album.photos.map((photo) => (
        <div
          key={photo.name}
          className='mm-masonry__item'
          style={{ '--w': photo.width, '--h': photo.height }}>
          <Image
            className='mm-masonry__img'
            src={photo.small}
            width={photo.width}
            height={photo.height}
            loading='lazy'
            alt=''
          />
        </div>
      ))}
    </div>
  )
}

export default Album
