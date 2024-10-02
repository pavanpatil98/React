import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function TextInputFormContainer() {

  //let inputType = "password";
  const [inputType,setInputType] = useState("password");
  let [value,setValue] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Sumitted",value);
    if(value){
        navigate(`/play`,{state:{wordSelected:value}});
    }

    //
    /*if(value){
        setTimeout(()=>{
            navigate(`/play`,{state:{wordSelected:value}});
            //navigate(`/play?text=${value}`); (query params)
        },50)
    }*/
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  function handleShowHideClick(event) {
    event.preventDefault();
    console.log("Show/Hide Clicked");
    if(inputType === "password"){
        setInputType("text");
    }
    else{
        setInputType("password");
    }
    console.log(inputType);
  }

  /*useEffect(()=>{
    console.log("Component Loaded");
  });

  useEffect(()=>{
    console.log("Component 1st load only");
  },[]);

  useEffect(()=>{
    console.log("Component state var value changes")
  },[value]);

  useEffect(()=>{
    console.log("Component state var inputType changes")
  },[inputType]);*/

  return (
    <>
    <div><p className="text-3xl font-bold ">Hangman Game</p></div>
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />

    {(inputType === 'password') ? <Temp/>:null}

    </>
  );
}

function Temp(){
  useEffect(()=>{
    console.log("Component is loaded/mounted");
    
    return ()=>{
      console.log("Component is unloaded/unmounted");
    }
  },[])
  return (
    <div>This is my temp div</div>
  );
}
export default TextInputFormContainer;
