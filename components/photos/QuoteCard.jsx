const QuoteCard = ({ quote }) => {
  return (
    <div className='Quote w-96 h-auto p-16 flex flex-col gap-40 content-between transition-all bg-neutral-900/50 sm:hover:bg-neutral-900'>
      <div className=''>
        <p className='text-5xl text-white mb-4'>{quote.text}</p>
        <p className='text-xl text-neutral-400'>{quote.author}</p>
      </div>
    </div>
  )
}

export default QuoteCard
