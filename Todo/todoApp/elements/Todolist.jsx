import { useState} from "react";
import Input from './Input';
import Todo from "./todo";
function Todolist(){
    let [tasks,setTask] = useState([]);
    let [message,setMessage] = useState("");
    let count = 1;
    
    function handleOnChangeHandler(e){
        setMessage(e.target.value);
        console.log("New task message: ",message);
    }
    function handleOnClickHandler(){
        count=tasks.length+1;
        if(message.trim() == ""){
            console.log("Please provide some messages");
            return;
        }
        console.log("Adding new todo element");
        setTask([...tasks,{count:count,message:message}]);
        setMessage("");
        
    }

    function onDelete(event) {
        let id = event.target.id;
        console.log("Deleting todo element with id: ",id);
        setTask(tasks.filter((task) => task.count != id));
    };
    
    return (
        <>
            <Input onChangeHandler={handleOnChangeHandler} onClickHandler={handleOnClickHandler} value={message}></Input>
            <ul>
              {
                tasks.map(task=>
                <li style={{textAlign:"left"}}key={task.count}><Todo id={task.count} todoMessage={task.message} handleDelete={onDelete}/></li>
                )
              }
            </ul>
        </>
    )
}

export default Todolist;