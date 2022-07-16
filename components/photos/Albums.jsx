import AlbumCard from './AlbumCard'
import QuoteCard from './QuoteCard'

const Albums = ({ albums, quotes }) => {
  if (!albums) return null

  return (
    <div className='Albums flex gap-6 flex-wrap'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
      <QuoteCard quote={quotes[0]} />
    </div>
  )
}

export default Albums
