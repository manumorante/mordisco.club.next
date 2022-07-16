import React, { useState, useEffect, useRef } from 'react'
import { useIntersection } from '../../js/useIntersection'
import classNames from 'classnames'

export default function Img({
  photoID,
  src,
  width,
  height,
  className,
  onLoad,
  currentPhoto,
  currentLoading,
}) {
  const [isCurrent] = useState(() => {
    if (isNaN(currentPhoto) || isNaN(photoID)) return false
    return parseInt(currentPhoto) === parseInt(photoID)
  })
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const [imgSrc, setImgSrc] = useState()
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setVisible(true)
  })

  useEffect(() => {
    // Si es el current lo muestra directo,
    //  sino comprueba que sea visible y que el current no esté cargando aun
    if (isCurrent || (visible && !currentLoading)) setImgSrc(src)
  }, [isCurrent, visible, currentLoading])

  const handleLoad = () => {
    setLoading(false)
    onLoad && onLoad()
  }

  const imgClasses = classNames(
    { 'is-loaded': !loading, 'opacity-0': loading },
    'transition-opacity duration-500',
    className
  )

  return (
    <img
      ref={imgRef}
      className={imgClasses}
      width={width}
      height={height}
      src={imgSrc}
      onLoad={handleLoad}
    />
  )
}
