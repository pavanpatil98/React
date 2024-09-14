import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer() {

  //let inputType = "password";
  const [inputType,setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Sumitted");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  function handleShowHideClick(event) {
    console.log("Show/Hide Clicked");
    if(inputType === "password"){
        setInputType("text");
    }
    else{
        setInputType("password");
    }
    console.log(inputType);
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
