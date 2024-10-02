
function Todo({id,todoMessage,handleDelete}){
    let myid = id;
    return(
        <>
            <span id={id} style={{textAlign:"left",width:"50px",border:"solid"}}>{todoMessage}</span>
            <button id={myid} style={{width:"5px"}} onClick={handleDelete}>X</button>
        </>
    )
}

export default Todo;