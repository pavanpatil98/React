import { Link } from "react-router-dom";
import Button from "../src/components/buttons/Button";
import { useState } from "react";
import { useEffect } from "react";
function Home(){
    const [wordValue,setWord] = useState('');
    async function fetchWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();
        console.log(data);

        const randomIndex = Math.floor(Math.random() *data.length);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
    }
    useEffect(()=>{
        fetchWords();
    },[]);
    return(
        <>
            <Link to="/play" state={{wordSelected:wordValue.toLowerCase()}}>
                <Button text = "Single Player Game"/>
            </Link>
            <Link to="/start">
                <Button text = "Multi Player Game"/>
            </Link>
        </>
    )
}
export default Home;