import Link from 'next/link'

const AlbumCard = ({ album }) => {
  return (
    <Link href={`/albums/${album.id}`}>
      <a className='AlbumCard p-6 border border-slate-700 rounded-md bg-slate-700/20 hover:bg-slate-700/60 transition-colors'>
        <div className='font-extrabold'>{album.id}</div>
        <div className='font-thin'>{album.date}</div>
      </a>
    </Link>
  )
}

export default AlbumCard
