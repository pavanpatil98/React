import "./Button.css";
function Button({ id, onClickHandler, toggle }) {
  return (
    
        <button
          text={toggle==true ? "X": "O"}
          className="Button"
          id={id}
          onClickHandler={onClickHandler}
        ></button>
     
  );
}
export default Button;
