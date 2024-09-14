function Button(){
    const [finishCheck, setFinish] = useState(true);

    const[toggle,setSign] = useState(true);
   
    function onClickHandler(event){
        toggle = toggle === true ? setSign(false) : setSign(true);
        array.push(event.target.value);
        setArray(array)
    }

    const [array, setArray] = useState([]);
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
        <>
        <div class="container">
        <div class="game">
          <Button id="1" onClickHandler={onClickHandler}></Button>
          <Button id="2" onClickHandler={onClickHandler}></Button>
          <Button id="3" onClickHandler={onClickHandler}></Button>
          <Button id="4" onClickHandler={onClickHandler}></Button>
          <Button id="5" onClickHandler={onClickHandler}></Button>
          <Button id="6" onClickHandler={onClickHandler}></Button>
          <Button id="7" onClickHandler={onClickHandler}></Button>
          <Button id="8" onClickHandler={onClickHandler}></Button>
          <Button id="9" onClickHandler={onClickHandler}></Button>
          </div>
          </div>
        </>
      );

}