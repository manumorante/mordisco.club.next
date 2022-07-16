import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/mordisco-logo.svg'

const Header = () => {
  return (
    <div className='Header w-full max-w-5xl mx-auto py-8 flex flex-col gap-6 items-center '>
      <Link href='/'>
        <a>
          <Image src={logo} width={127} height={22} alt='Logo' />
        </a>
      </Link>

      <nav className='flex gap-4 text-neutral-200 text-sm uppercase'>
        <Link href='/'>Inicio</Link>
        <Link href='/albums'>Albums</Link>
      </nav>
    </div>
  )
}
export default Header
