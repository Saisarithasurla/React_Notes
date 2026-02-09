import React from 'react'

function Book({title,pages,x,setx,fn}) {
  return (
    <div className=' p-3 rounded-2 flex flex-col gap-2 bg-amber-200'>
			<h2>Book Name: {title}</h2>
			<p>Pages: {pages}</p>
			<button className='bg-black rounded text-white py-2 text-center ' onClick={() => setx(x + 1)}>click me</button>
             <button
        className="bg-blue-600 text-white py-1 rounded"
        onClick={fn}
      >
        Call Function
      </button>
		</div>
  )
}

export default Book