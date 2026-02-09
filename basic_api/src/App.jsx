import { useEffect, useState } from "react"

function App() {
  const[data,setdata]=useState([])
  useEffect(()=>
  {
    fetch("https://dummyjson.com/recipes")
    .then((res)=>res.json())
    .then((ans)=>setdata(ans))
    .catch((err)=>console.log(err))
  },[]
  )
  return (
    <>
      <header className="bg-neutral-700 h-36 flex flex-col">
        <h1 className="text-5xl text-white p-6">
          Basic<span className="text-6xl text-red-700">API</span>
        </h1>

        <h3 className="text-orange-500 text-6xl text-center -mt-16">
          Recipes
        </h3>
      </header>
      <main className=" grid grid-cols-3 gap-5 p-7 w-screen">
        {data.recipes&& data.recipes.map((r)=>
        <div>
          <img src={r.image}/>
          <h2 className=" text-center text-2xl text-orange-900 font-bold">{r.name}</h2>
          <p className=" text-center text-black text-xl font-bold">Rating:{r.rating}/5</p>
        </div>
        )}

      </main>
      <footer className=" bg-neutral-500 text-white text-2xl text-center m-4">
        This Site belongs to Saritha @2026 made with 💖
      </footer>
    </>
  )
}

export default App
