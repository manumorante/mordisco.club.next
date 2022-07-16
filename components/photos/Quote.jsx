const Quote = ({ quote }) => {
  return (
    <div className='Quote w-full h-full px-14 py-20 '>
      <div>
        <p className='text-3xl text-white mb-4'>{quote.text}</p>
        <p className='text-xl text-neutral-400'>{quote.author}</p>
      </div>
    </div>
  )
}

export default Quote
