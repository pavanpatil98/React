import TextInput from '../textinput/TextInput'
import Button from '../buttons/Button'
function TextInputForm({inputType,handleTextInputChange,handleFormSubmit,handleShowHideClick}) {

  
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Enter your word or phrase"
          placeholder="Enter the word here"
          onChangeHandler= {handleTextInputChange}
          type = {inputType}
        />
      </div>
      <div>
        <Button
          text={inputType=="text" ?"Hide":"Show"}
          styleType="warning"
          className="px-4 py-4"
          onClickHandler={handleShowHideClick}
        />
        <Button
          text="Submit"
          styleType="primary"
          type = "submit"
        />
      </div>
    </form>
  );
}
export default TextInputForm;
