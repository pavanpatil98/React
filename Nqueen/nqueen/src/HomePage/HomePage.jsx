import './HomePage.css'
import { useNavigate} from "react-router-dom";
import { useState } from "react";
function HomePage(){
    const [gridSize,setGridSize] = useState(0);
    const navigate = useNavigate();

    function onChangeHandler(event){
        setGridSize(parseInt(event.target.value));
    }

    function onClickHandler(event){
        event.preventDefault();
        console.log(gridSize+"---------------------");
        if(gridSize>0){
            navigate("/play",{state:{gridSize:gridSize}});
        }
    }

    return(
        <>
        <span><label>{"Enter Grid Size  "}</label></span>
        <input type="text" placeholder="type grid size here..." onChange={onChangeHandler}></input>
        <button type="submit" className='button' onClick={onClickHandler}>Submit</button>
        </>
    )
}
export default HomePage;