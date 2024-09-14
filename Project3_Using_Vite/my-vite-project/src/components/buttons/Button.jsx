import './Button.css'

function Button({text,more,onClickHandler}){
    
    return (<button onClick={onClickHandler}
            className = "btn"
            >{text+"-----"+more}</button>);
}
export default Button;