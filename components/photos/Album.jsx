import Photo from './Photo'

const Album = ({ album, quotes }) => {
  if (!album) return null

  return (
    <div className='mm-masonry'>
      {album.photos.map((photo) => {
        return <Photo photo={photo} key={photo.id} />
      })}
    </div>
  )
}

export default Album
