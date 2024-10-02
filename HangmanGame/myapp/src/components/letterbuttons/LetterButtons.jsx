function LetterButtons({text,guessedLetters,handleOnClick}){
    const Alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let textHashSet = new Set(text.toUpperCase());
    let guessedHashSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        console.log("Hello--------------"+guessedHashSet+letter);
        for (let value of guessedHashSet) {
            console.log(value); // Prints each value in the set (1, 2, 3, 4, 5)
        }
        if(guessedHashSet.has(letter)){
            console.log(text+"************"+textHashSet+"------"+guessedHashSet+"---*****---"+letter);
            let ans =  textHashSet.has(letter) ? "bg-green-500": "bg-gray-500";
            return ans;
        }
        else{
            return "bg-orange-500";
        }
    }
    return (
        <div className="flex flex-wrap justify-center">
            {Alphabets.split('').map((letter, index) => (
                <button 
                    onClick={handleOnClick}
                    disabled={guessedHashSet.has(letter)}
                    key={index}
                    className={`text-black font-semibold py-3 px-4 mx-2 my-2 rounded-lg shadow-lg border-2 border-gray-400 hover:bg-orange-600 transition duration-300 ease-in-out ${buttonStyle(letter)}`}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
      
}
export default LetterButtons;