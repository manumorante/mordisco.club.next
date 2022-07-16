import AlbumCard from './AlbumCard'

const Albums = ({ albums }) => {
  if (!albums) return null

  return (
    <div className='Albums flex gap-4 flex-wrap'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  )
}

export default Albums
