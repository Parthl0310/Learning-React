import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <div className='h-screen w-screen flex-row  justify-center items-center px-2 ' style={{backgroundColor:color }}>
      <div className="w-fit flex-wrap left-4/15 place-self-center justify-center bottom-4 text-center fixed bg-white rounded-lg mx-3 py-1"> 
        <button className='ml-2 text-xl h-10 w-20 text-white bg-red-600 rounded-3xl px-2 py-0.5 text-center mx-1 my-1 hover:text-black hover:scale-110 duration-1000 hover:bg-red-500 shadow-2xs border-black border mr-10 '
        onClick={()=>{ setColor('red')}}>Red</button>
        <button className='ml-2 text-xl h-10 w-20 text-white bg-green-600 rounded-3xl px-2 py-0.5 text-center mx-1 my-1 hover:text-black hover:scale-110 duration-1000 hover:bg-green-500 shadow-2xs border-black border mr-10'
        onClick={()=>{ setColor('green')}}>Green</button>
        <button className='ml-2 text-xl h-10 w-20 text-white bg-blue-600 rounded-3xl px-2 py-0.5 text-center mx-1 my-1 hover:text-black hover:scale-110 duration-1000 hover:bg-blue-500 shadow-2xs border-black border mr-10'
        onClick={()=>{ setColor('blue')}}>Blue</button>
        <button className='ml-2 text-xl h-10 w-20 text-white bg-yellow-300 rounded-3xl px-2 py-0.5 text-center mx-1 my-1 hover:text-black hover:scale-110 duration-1000 hover:bg-yellow-500 shadow-2xs border-black border mr-10'
        onClick={()=>{ setColor('yellow')}}>Yellow</button>
        <button className='ml-2 text-xl h-10 w-20 text-white bg-pink-400 rounded-3xl px-2 py-0.5 text-center mx-1 my-1 hover:text-black hover:scale-110 duration-1000 hover:bg-pink-500 shadow-2xs border-black border mr-10'
        onClick={()=>{ setColor('Pink')}}>Pink</button>
      </div>
    </div>
  )
}

export default App
