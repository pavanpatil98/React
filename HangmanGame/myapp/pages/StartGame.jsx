import { Link } from "react-router-dom";
import TextInputFormContainer from "../src/components/textinputform/TextInputFormContainer";
//<Link to='/play'>Play Game Link</Link>
function StartGame(){
    return (
        <>
            
            <TextInputFormContainer/>
            <br></br>
            <Link to='/play'>Play Game Link</Link>
        </>
    )
}

export default StartGame;