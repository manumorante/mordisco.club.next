import Photo from './Photo'

const Album = ({ album }) => {
  if (!album) return null

  return (
    <div className='mm-masonry'>
      {album.photos.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  )
}

export default Album
