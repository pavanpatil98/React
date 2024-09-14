import './Button.css'

function Button({text,more,onClickHandler,styleType="primary"}){
    //static style then just pass in "" else used object for dynamic content
     return (<button onClick={onClickHandler}
            className = {`text-white ${getButtonStyle(styleType)} m-2 px-8 py-4 rounded-xl`}
            >{text}</button>);
}

function getButtonStyle(styleType){
    if(styleType==="primary"){
        return "bg-orange-500";
    }
    else if(styleType==="secondary"){
        return "bg-blue-500";
    }
    else if(styleType==="success"){
        return "bg-green-500";
    }
    else if(styleType==="warning"){
        return "bg-yellow-500";
    }
    else{
        return "bg-gray-500";
    }
}

export default Button;
