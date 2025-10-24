import { useState } from 'react'
import Gallery from './components/Gallery.jsx'
import Navigation from './components/Navigation.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-between items-center h-svh '>
      <div className='border border-gray-600 rounded-2xl w-[48svw] h-[80svh]'>

      </div>
      <div className='flex flex-col justify-between rounded-2xl w-[48svw] h-[80svh] '>
        <Navigation />
        <div className=' bg-[#32343B] rounded-3xl h-1 lg:ml-24 md:ml-14 w-[30svw]'>

        </div>
        <Gallery />
        <div className=' bg-[#32343B] rounded-3xl h-1 lg:ml-24 md:ml-14 w-[30svw]'></div>
      </div>
    </div>
      
    </>
  )
}

export default App
