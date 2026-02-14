import React from 'react'
import {useRef} from 'react'
function App() {
const usernameref=useRef("")
const emailref=useRef("")
const passwordref=useRef("")
const confirmpasswordref=useRef("")
const handlesubmit=(e)=>{
  e.preventDefault()
	  console.log(usernameref.current.value,emailref.current.value,passwordref.current.value)
			fetch(`https://forms.free.beeceptor.com`, {
				method: "POST",
				body: JSON.stringify({
					username: usernameref.current.value,
					email: emailref.current.value,
					password: passwordref.current.value,
				}),
			})
				.then((res) => {
					if (res.ok) alert("Successfuly submitted the data")
					else alert("Please check the api ,network error")
				})
				.catch((err) => console.log(err))
	
}


  return (
      <div>
      <header className='bg-gray-500 text-white text-5xl text-center h-24 p-6 font-bold'>
        Registration Form
      </header>
      <div className='flex items-center justify-center h-screen '>
      <form className='flex flex-col justify-center items-center gap-4 p-12 bg-cyan-300 hover:bg-pink-300 w-1/4 rounded-2xl -mt-60' onSubmit={handlesubmit}>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0" ref={usernameref} type="text" placeholder='Enter user name'/>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0"  ref={emailref} type="email" placeholder='Enter Email address'/>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0"  ref={passwordref} type="password" placeholder='Enter Password'/>
        <input className="border-2 rounded-2xl w-60 h-10 p-3 outline-0"  ref={confirmpasswordref} type="password" placeholder='Retype Password'/>
        <button  className=" border-2 hover:bg-orange-600 border-black text-2xl text-white text-center rounded-2xl bg-black w-32 h-12 m-3 font-bold" type="submit"> Register </button>
        </form>
      </div>
    </div>
    
  )
}

export default App