import React, { useMemo } from 'react'
function App() {
  const value=useMemo(()=>{
    let p=1
    for(let i=1;i<=6;i++){
      p=p*i
    }
  
    return p
  },[])
  return (
    <h1>{value}</h1>
  )
}


export default App