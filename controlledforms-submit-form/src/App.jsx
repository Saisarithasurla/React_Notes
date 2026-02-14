import React from 'react'
import { useState } from 'react'

function App() {
  const[username,setusername]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[confirmpassword,setconfirmpassword]=useState("")
  const[error,seterror]=useState("")
  function handleValidateData ()
  {
    if (username.trim().length < 8)
    {
      seterror("username must be atleast 8 characters");
      return false
    }
     if (!/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}$/.test(email))

    {
      seterror("Email is Not Valid");
      return false
    }
    if (password != confirmpassword)
    {
      seterror("Passwords are not matching");
      return false;
    }
    return true;
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const isGood = handleValidateData();
    if (isGood)
      
    {
      fetch(`https://forms.free.beeceptor.com`, {
				method: "POST",
				body: JSON.stringify({
					username: username,
					email: email,
					password: password,
				}),
			})
				.then((res) => {
					if (res.ok) alert("Successfuly submitted the data")
					else alert("Please check the api ,network error")
				})
				.catch((err) => console.log(err))
			setusername("")
			setemail("")
			setpassword("")
			setconfirmpassword("")
    }
    else
    {
      alert(error)
    }
  }
  return (
      <div>
      <header className='bg-gray-500 text-white text-5xl text-center h-24 p-6 font-bold'>
        Registration Form
      </header>
    
      <div className='flex items-center justify-center h-screen '>
        <form className='flex flex-col justify-center items-center gap-4 p-12 bg-cyan-300 hover:bg-pink-300 w-1/4 rounded-2xl -mt-60 ' onSubmit={handleSubmit}>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0" value={username} onChange={(e) => {setusername(e.target.value)}} type="text" placeholder='Enter user name'/>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0" value={email}  onChange={(e) => {setemail(e.target.value)}} type="email" placeholder='Enter Email address'/>
        <input  className="border-2 rounded-2xl w-60 h-10 p-3 outline-0"  value={password} onChange={(e) => {setpassword(e.target.value)}}  type="password" placeholder='Enter Password' />
        <input className="border-2 rounded-2xl w-60 h-10 p-3 outline-0" value={confirmpassword} onChange={(e) => {setconfirmpassword(e.target.value)}} type="password" placeholder='Retype Password'/>
        <button  className=" border-2 hover:bg-orange-600 border-black text-2xl text-white text-center rounded-2xl bg-black w-32 h-12 m-3 font-bold" type="submit"> Register </button>
        </form>
      </div>
     
    
     
    </div>
  )
}

export default App