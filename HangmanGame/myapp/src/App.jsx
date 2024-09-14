import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/buttons/Button'
import TextInput from './components/textinput/TextInput'
import TextInputForm from './components/textinputform/TextInputForm'
import TextInputFormContainer from './components/textinputform/TextInputFormContainer'

function App() {
 
  return (
    <div><p className="text-3xl font-bold ">Hangman Game</p>
     
        <TextInputFormContainer></TextInputFormContainer>
    </div>
  )
}

export default App;
 /*<Button text="Pavan Click it" more="something" onClickHandler={function(){console.log("Button 1");}}  styleType="primary"/>
      <Button text="Just Click it" more="good for you" onClickHandler={function(){console.log("Button 2");}} styleType="secondary"/>

      <TextInput 
        type="text" 
        label="Enter some text"
        placeholder='Enter the password' 
        value = {""}
        onChangeHandler={function(event){
          console.log(event.target.value);
        }} />
        */