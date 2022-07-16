import React from 'react'
import useStickyHeader from '../../hooks/useStickyHeader'
import classNames from 'classnames'
import Logo from './Logo'
import Link from 'next/link'

export default function Header() {
  const { headerRef, isSticky } = useStickyHeader()

  const className = classNames(
    'Header',
    'fixed top-0 right-0 left-0 z-10',
    'transition-all duration-500 ease-in-out',
    'bg-gradient-to-b from-black',
    'flex flex-col gap-4 items-center justify-center',
    {
      'backdrop-blur-sm': isSticky,
      'py-24': !isSticky,
      'py-12': isSticky,
    }
  )

  const logoClass = classNames('transition-all duration-500 ease-in-out', {
    'h-9': !isSticky,
    'h-7': isSticky,
  })

  return (
    <div ref={headerRef} className={className}>
      <Link href='/'>
        <a>
          <Logo className={logoClass} />
        </a>
      </Link>

      {!isSticky && (
        <nav className='flex gap-4 text-white/50 text-lg opacity-0 animate-in-delay'>
          <Link href='/'>Inicio</Link>
          <Link href='/albums'>Photos</Link>
        </nav>
      )}
    </div>
  )
}
