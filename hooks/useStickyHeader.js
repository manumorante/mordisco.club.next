import { useState, useEffect, useRef, useCallback } from 'react'

const StickyHeader = (defaultSticky = false, offset = 20) => {
  const [isSticky, setIsSticky] = useState(defaultSticky)
  const headerRef = useRef(null)

  const toggleSticky = useCallback(
    ({ scrollTop, height }) => {
      if (isSticky && scrollTop < height - offset) setIsSticky(false)
      if (!isSticky && scrollTop >= height + offset) setIsSticky(true)
    },
    [isSticky]
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const height = headerRef.current.offsetHeight

      toggleSticky({ scrollTop, height })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toggleSticky])

  return { headerRef, isSticky }
}

export default StickyHeader
