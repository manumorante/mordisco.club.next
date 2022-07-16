import React from 'react'

// If you pass it nothing, it shows itself with the idea that you control it from the outside.
export default function Spinner({ showif = true }) {
  if (!showif) return null

  return (
    <div className='Spinner'>
      <div className='Spinner__wiggle'></div>
    </div>
  )
}
