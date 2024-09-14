import Button from "./Button";
import { useState } from "react";
function BoardContainer() {
  /*const [finishCheck, setFinish] = useState(true);

    const[toggle,setSign] = useState(true);
   */
  //const [inputType,setInputType] = useState("password");
  let [toggle, setToggle] = useState(0);
  let [array1, setArray1] = useState([]);
  let [array2, setArray2] = useState([]);
  let [win,setWin] = useState(false);
  let [winArray,setWinArray] = useState([]);
  let [one, setOne] = useState("");
  let [two, setTwo] = useState("");
  let [three, setThree] = useState("");
  let [four, setFour] = useState("");
  let [five, setFive] = useState("");
  let [six, setSix] = useState("");
  let [seven, setSeven] = useState("");
  let [eight, setEight] = useState("");
  let [nine, setNine] = useState("");

 
  function handleChecks(toggle, setFunction, value) {
    if (toggle === 0) {
      setFunction("X");
      array1.push(value);
      setArray1(array1);
      win = checkResult(array1);
      setWin(win);
      if (win) window.alert("User 1 wins");
    } else {
      setFunction("O");
      array2.push(value);
      setArray2(array2);
      win = checkResult(array2);
      setWin(win);
      if (win) window.alert("User 2 wins");
    }
    console.log(array1);
    console.log(array2);
  }
  function onClickHandler1(event) {
    if (one != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setOne,1);
  }
  function onClickHandler2(event) {
    if (two != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setTwo,2);
  }
  function onClickHandler3(event) {
    if (three != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setThree,3);
  }
  function onClickHandler4(event) {
    if (four != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setFour,4);
  }
  function onClickHandler5(event) {
    if (five != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setFive,5);
  }
  function onClickHandler6(event) {
    if (six != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setSix,6);
  }
  function onClickHandler7(event) {
    if (seven != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setSeven,7);
  }
  function onClickHandler8(event) {
    if (eight != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setEight,8);
  }

  function onClickHandler9(event) {
    if (nine != "" || win) return;
    if (toggle == 0) setToggle(1);
    else setToggle(0);
    handleChecks(toggle,setNine,9);
  }

  
  function checkResult(array) {
    console.log("inside array");
    //Check for winning conditions
    if (array.length < 3) {
      return false;
    } else {
      if (
        array.indexOf(1) != -1 &&
        array.indexOf(2) != -1 &&
        array.indexOf(3) != -1
      ) {
        winArray = [1,2,3];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(4) != -1 &&
        array.indexOf(5) != -1 &&
        array.indexOf(6) != -1
      ) {
        winArray = [4,5,6];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(7) != -1 &&
        array.indexOf(8) != -1 &&
        array.indexOf(9) != -1
      ) {
        winArray = [7,8,9];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(1) != -1 &&
        array.indexOf(4) != -1 &&
        array.indexOf(7) != -1
      ) {
        winArray = [1,4,7];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(2) != -1 &&
        array.indexOf(5) != -1 &&
        array.indexOf(8) != -1
      ) {
        winArray = [2,5,8];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(3) != -1 &&
        array.indexOf(6) != -1 &&
        array.indexOf(9) != -1
      ) {
        winArray = [3,6,9];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(1) != -1 &&
        array.indexOf(5) != -1 &&
        array.indexOf(9) != -1
      ) {
        winArray =[1,5,9];
        setWinArray(winArray);
        return true;
      } else if (
        array.indexOf(3) != -1 &&
        array.indexOf(5) != -1 &&
        array.indexOf(7) != -1
      ) {
        winArray = [3,5,7];
        setWinArray(winArray);
        return true;
      } else {
        return false;
      }
    }
  }

  
  return (
    <>
      <Button id="1" onClickHandler={onClickHandler1} text={one} win={win} winArray={winArray} ></Button>
      <Button id="2" onClickHandler={onClickHandler2} text={two} win={win} winArray={winArray}></Button>
      <Button id="3" onClickHandler={onClickHandler3} text={three} win={win} winArray={winArray}  ></Button>
      <Button id="4" onClickHandler={onClickHandler4} text={four} win={win} winArray={winArray}  ></Button>
      <Button id="5" onClickHandler={onClickHandler5} text={five} win={win} winArray={winArray}  ></Button>
      <Button id="6" onClickHandler={onClickHandler6} text={six} win={win} winArray={winArray}  ></Button>
      <Button id="7" onClickHandler={onClickHandler7} text={seven} win={win} winArray={winArray}  ></Button>
      <Button id="8" onClickHandler={onClickHandler8} text={eight} win={win} winArray={winArray}  ></Button>
      <Button id="9" onClickHandler={onClickHandler9} text={nine} win={win} winArray={winArray}  ></Button>
    </>
  );
}
export default BoardContainer;
