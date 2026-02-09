import React, { useEffect, useState } from 'react'

function Todos() {
    const[inputvalue,setinputvalue]=useState("")
    const[todoitems,settodoitems]=useState([])
   
    function addtodo()
    {
        settodoitems([...todoitems,{text:inputvalue,isCompleted:false}])
        fetch(`https://todoapp.free.beeceptor.com/`,{
            method:'POST',
            body:JSON.stringify([...todoitems,{text:inputvalue,isCompleted:false}])
             })
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
       
        
        setinputvalue("")
    }
    function deletetodo(ind)
    {
        let newtodoitems=todoitems.filter((e,i)=>i!=ind)
        settodoitems(newtodoitems)
    }
    useEffect(()=>{
        fetch(`https://todoapp.free.beeceptor.com/`)
            .then((res)=>res.json())
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err))

},[todoitems])
    
  return (
    <div>
    <div className='flex justify-center items-center m-20 gap-5'>
        <input  className=" text-2xl rounded-2xl border-2  outline-0 p-2"type='text' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}
        placeholder='Enter your task'/>
        <button className='text-2xl text-white bg-blue-600 w-28 h-12 rounded-2xl p-2' onClick={addtodo}>Add</button>
        </div>
        <div className=' flex flex-col gap-4 -mt-10'>
              {todoitems.map((e,i) => (
                  <div className='flex gap-5 items-center justify-center -ml-28  '>
                    <input type="checkbox"  className=" w-5 h-5 " checked={e.isCompleted} 
                    onChange={() => {
                        const newTodos = [...todoitems];
                         newTodos[i] = {...newTodos[i],
                        isCompleted: !newTodos[i].isCompleted};
                        settodoitems(newTodos);
                        }}/>
                      <p className=' text-2xl  text-black font-bold' style={{color:e.isCompleted?"green":"black"}}>{e.text}</p>
                      <button className=' bg-red-500 text-2xl text-white rounded-2xl p-1 h-12 w-22'
                      onClick={()=>deletetodo(i)}>delete</button>
                  </div> 
              ))}
          </div>
    </div>
  )
}

export default Todos