function TextInput({type="text",label,placeholder="Enter your input here...",value,onChangeHandler}){
    return (
        <label>
            <br></br>
            <span className="px-4">{label}</span>
            <input 
            type={type} 
            className="px-4 py-2 border-text-gray-500" 
            placeholder={placeholder}
            onChange={onChangeHandler}/>  {/* input field */}
        </label>
    )

}
export default TextInput;