import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './main'
import Component1 from './Component1'
import Component3 from './Component3'
import Component2 from './Component2'
function App() {
  const [theme,settheme]=useState('light')
return (
    <>
       <p>The theme is {theme} </p>
       <ThemeContext.Provider value={{theme,settheme}}>
        <Component2/>
       </ThemeContext.Provider>
       <button onClick={()=>{let x=theme=='light'?'dark':'light';settheme(x)}}>Click Me </button>

    </>
  )
}

export default App