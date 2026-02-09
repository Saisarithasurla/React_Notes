import {ShoppingCart} from 'lucide-react'
import {useState} from 'react'
import Products from './components/Products'

const App=() =>
{
  const [count,setcount]=useState(0)
  return(
    <>
     <header className=" bg-neutral-700 text-3xl text-white justify-between items-center flex py-3 px-5 m-1">
      <h2 className='text-5xl'>Basic<span className='text-blue-500'>Shop</span></h2>
      <div className=" flex justify-center items-center">
          <ShoppingCart /><span className=" absolute top-5 right-1 text-blue-500">{count}</span>
			</div>
     </header>
    <Products counterFn={setcount} count={count}/>
    <footer className=' bg-neutral-600 text-white text-2xl gap-1 text-center py-3'>
      This site belongs to @xyz 2026 with 💖
    </footer>
     
    </>
  )

}
export default App