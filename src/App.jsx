import { useState } from 'react'
import './App.css'
import Routind from './Routing/Routind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routind />
    </>
  )
}

export default App
