import { useState } from "react"
import "./App.css"
function App()
{
  const [x,setX]=useState(0)
  function decrease()
  {
    setX(x-1)
  }
  function increase()
  {
    setX(x+1)
  }
  function reset()
  {
    setX(0)
  }
  return(
    <div className="cont">
       <div className="container">
        <h1>Animated Counter</h1>
         <p className="para">{x}</p>
      <div className="btn">
       <button onClick={decrease}>
        <h2>Decrease</h2>
       </button>
        <button  onClick={increase}>
        <h2>Increase</h2>
       </button>
       <button onClick={reset}>
        <h2>Reset</h2>
       </button>
       </div>
    </div>
    </div>
  )
}
export default App
