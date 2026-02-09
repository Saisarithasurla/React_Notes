import React from 'react'
import Todos from './components/Todos.jsx';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <header className=' bg-green-400 h-28 text-5xl text-center p-6 flex items-center justify-center gap-3 font-bold '>
      Todo Application
      <img className='h-16 w-18 ' src="https://previews.123rf.com/images/hironicons/hironicons2006/hironicons200600481/149325726-checklist-icon-to-do-list-task-complete-beautiful-meticulously-designed-icon-well-organized-and.jpg"/>
    </header>
    <div className='flex-1' >
    <Todos/>
    </div>
    <footer className='border-t-2  border-black text-3xl text-center p-3 bg-neutral-400 '>
      This Website is made by Saritha  &copy; 2026
    </footer>
    </div>
   
  )
}

export default App