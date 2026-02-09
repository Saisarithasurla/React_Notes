import React,{useCallback} from 'react'
import { useState } from 'react'
import Child from './Child'

function App() {
  const[x,setx]=useState(0)
  const handleClick=useCallback(()=>console.log("button clicked"),[])
  return (
    <div>
      <p>{x}</p>
      <button onClick={()=>setx(x+1)}>Click Me</button> 
      <Child clickFn={handleClick}/>
    </div>
  )
}

export default App