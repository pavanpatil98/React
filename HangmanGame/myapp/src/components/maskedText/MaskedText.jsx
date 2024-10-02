import {getMaskedString} from './MaskingUtility';
function MaskedText({ text, guessedLetters }) {
  let maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => (
        <span key={index} className="m-2">{letter}</span>
      ))}
    </>
  );
}

export default MaskedText;
