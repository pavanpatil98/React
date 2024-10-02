import "./Button.css";
function Button({ index,id, text,selectedButtons}) {
  console.log(selectedButtons);
  return (
    <button key={index} className={selectedButtons.includes(id) ?"grid-button":"grid-button1"} >
      {text}
    </button>
  );
}
export default Button;
