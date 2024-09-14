import "./Button.css";
function Button({ id, onClickHandler, text , win ,winArray}) {
  return (
    
        <button
          className={win && winArray.includes(Number(id)) ? "button1" : "button"}
          id={id}
          onClick={onClickHandler}
        >{text}</button>
     
  );
}
export default Button;
