import AlbumItem from './AlbumItem'

const Album = ({ items }) => {
  if (!items) return null

  return (
    <div className='mm-masonry'>
      {items.map((item) => {
        return <AlbumItem item={item} key={item.id} />
      })}
    </div>
  )
}

export default Album
