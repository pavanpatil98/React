function Input({onChangeHandler,onClickHandler,value}){

    
    return(
        <>
            <input type="text" value={value} placeholder="Enter the text" onChange={onChangeHandler}></input>
            <button onClick={onClickHandler}>Add Todo</button>
        </>
    );
}

export default Input;