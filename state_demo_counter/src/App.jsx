import "./App.css"
import { useState } from "react";
function App()
{
  const [x,setX]=useState(0)
  function increase()
  {
    setX(x+1)
  }
  function decrease()
  {
    setX(x-1)
  }
  const [t,setT]=useState("")
  return(
    <div className="container">
      <p>{x}</p>
      

      <div className="btn">
        <button onClick={increase}>
        <h1 className="head">Increase</h1>
        </button> <br></br> 
        <button className="hea" onClick={decrease}>
      Decrease
        </button>
        
      </div>
      <div className="inp">
        <p className="te">You Entered:{t}</p>
        <p className="ti">{t}</p>
        <input type="text" value={t} onChange={(e)=>setT(e.target.value)}/>
      </div>
    </div>
    
  )
}
export default App
