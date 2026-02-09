import React from 'react'
import Book from './Book'
import { useState,useEffect,useCallback,useMemo } from 'react'
function App() {
  const[x,setx]=useState(0)
  const[book,setbook]=useState([])
  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books`)
    .then((res)=>res.json())
    .then((data)=>setbook(data))
    .catch((error)=>console.log(error))
  },[])
  const value=useCallback(()=>{
    console.log("hii")
  },[])
  const number=useMemo(()=>{
    let a=6,b=8;
    return a+b
  })
  return (
      <>
      
      <h2 className='text-5xl text-center m-8'>Parent button:{x}</h2>
      <p className='text-center text-2xl text-red-700 font-bold'>sum is:{number}</p>
      <div className='mx-auto max-w-5xl grid grid-cols-2 gap-7 my-5  bg-amber-200 '>
        {book.map((e) => (
          <Book  key={e.id} title={e.title} pages={e.pages} x={x} setx={setx} fn={value} />
        ))}
        
      </div>

    </>
  )
}

export default App