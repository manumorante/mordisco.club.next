import React from 'react'
import Photo from './Photo'
import Quote from './Quote'
import classNames from 'classnames'

function AlbumItem({ item }) {
  const isPhoto = item.type === 'photo'
  const w = item.width || 300
  const h = item.height || 400
  const className = classNames('mm-masonry__item', {
    Photo: isPhoto,
    Quote: !isPhoto,
  })

  return (
    <div className={className} style={{ '--w': w, '--h': h }}>
      {isPhoto && <Photo photo={item} />}
      {!isPhoto && <Quote quote={item} />}
    </div>
  )
}

export default AlbumItem
