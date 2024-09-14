import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './component/Button'
function App() {
  return (
    <>
    <p className="text-3xl font-bold ">Hangman Game</p>
    <Button id="1"></Button>
    <Button id="2"></Button>
    <Button id="3"></Button>
    <Button id="4"></Button>
    <Button id="5"></Button>
    <Button id="6"></Button>
    <Button id="7"></Button>
    <Button id="8"></Button>
    <Button id="9"></Button>
    </>
  )
}

export default App
