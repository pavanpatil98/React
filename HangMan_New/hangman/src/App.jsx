import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>My App</p>
      <Button></Button>
    </>
  )
}

export default App
