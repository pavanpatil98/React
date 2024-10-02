
//original word is HUMBLE
//guessed word is H_M__E


export function getMaskedString(originalWord,guessedLetters){
    console.log(guessedLetters);
    guessedLetters = guessedLetters.map(letter=> letter.toUpperCase());
    let guessedLettersSet = new Set(guessedLetters);
    
    const result = originalWord.toUpperCase().split('').map(letter => {
        if(guessedLettersSet.has(letter)) {
            return letter
        } else {
            return ' _ ';
        }
    });

    return result;
}

