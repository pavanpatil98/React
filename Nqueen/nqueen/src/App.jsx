import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Board/Board'
import HomePage from './HomePage/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<h2>Please go to <Link to='/home'>Home</Link></h2>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/play" element={<Board/>}/>
    </Routes>
    </>
  )
}

export default App
