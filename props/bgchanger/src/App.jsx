import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count,setcount]=useState(0)
  const x=()=>{
    setcount(count+1)
  }
  return (
    <div>
      <Card name="Parth " ></Card>
      <Card></Card>
      <Button my={x} cnt={count}>
        <h1>{count}</h1>
        <h1>"hiii"</h1>
      </Button>
    </div>
  )
}

export default App
