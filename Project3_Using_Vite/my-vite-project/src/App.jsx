import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/buttons/Button'

function App() {
  return (
    <div>Hello World
      <Button text="Pavan Click it" more="something" onClickHandler={function(){console.log("Button 1");}}/>
      <Button text="Just Click it" more="good for you" onClickHandler={function(){console.log("Button 2");}}/>
    </div>
  )
}

export default App;
