import { Link, useLocation, useParams, useSearchParams} from "react-router-dom";
import { useState } from "react";
import MaskedText from "../src/components/maskedText/maskedText";
import LetterButtons from "../src/components/letterbuttons/LetterButtons";
function PlayGame(){
    //query
    //const [searchParams] = useSearchParams();
    //console.log(searchParams.get("text"));

    //path
    //console.log(pathParams.get("text"));
    //const {text} = useParams();
    //{arr.map((letter,index)=> <h1 key={index}>{letter}</h1>)}
    //using react router
    const {state} = useLocation();
    let [guessedLetters,setGuessedLetters] = useState([]);
    const arr = ["Play Game","Draw"]
    // 

    function onClickHandler(event) {
        //if(guessedLetters.join('') === state)return;
        const value = event.currentTarget.textContent;
        
        setGuessedLetters([...guessedLetters, value]);  
        //setGuessedLetters([...guessedLetters, letter]);
        console.log(value+"-----------"+guessedLetters+"------"+state+"********"+typeof(guessedLetters));   
    }

    return (
        <>
    
        {state?.wordSelected && (
            <>
        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>
        <br></br>
        <div>
        <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} handleOnClick={onClickHandler}/>
        </div></>)}

        <Link to='/start'>Start Game Link</Link>
        </>

    )
}

export default PlayGame;