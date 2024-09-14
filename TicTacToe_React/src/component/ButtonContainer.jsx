import Button from "./Button";

function ButtonContainer(){

    const[toggle,setSign] = useState(true);
   
    function onClickHandler(event){
        toggle = toggle === true ? setSign(false) : setSign(true);
        array.push(event.target.value);
        setArray(array)
    }

    function checkResult(array) {
        //Check for winning conditions
        if (array.length < 3) {
          return false;
        } else {
          if (
            array.indexOf("1") != -1 &&
            array.indexOf("2") != -1 &&
            array.indexOf("3") != -1
          ) {
            return true;
          } else if (
            array.indexOf("4") != -1 &&
            array.indexOf("5") != -1 &&
            array.indexOf("6") != -1
          ) {
            return true;
          } else if (
            array.indexOf("7") != -1 &&
            array.indexOf("8") != -1 &&
            array.indexOf("9") != -1
          ) {
            return true;
          } else if (
            array.indexOf("1") != -1 &&
            array.indexOf("4") != -1 &&
            array.indexOf("7") != -1
          ) {
            return true;
          } else if (
            array.indexOf("2") != -1 &&
            array.indexOf("5") != -1 &&
            array.indexOf("8") != -1
          ) {
            return true;
          } else if (
            array.indexOf("3") != -1 &&
            array.indexOf("6") != -1 &&
            array.indexOf("9") != -1
          ) {
            return true;
          } else if (
            array.indexOf("1") != -1 &&
            array.indexOf("5") != -1 &&
            array.indexOf("9") != -1
          ) {
            return true;
          } else if (
            array.indexOf("3") != -1 &&
            array.indexOf("5") != -1 &&
            array.indexOf("7") != -1
          ) {
            return true;
          } else {
            return false;
          }
        }
      }
    return (
        <Button id={id} onClickHandler={onClickHandler}></Button>
    )
}