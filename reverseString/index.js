console.log("Reverse String Solution")

const reverseString = (word) => {
    const wordArray = word.split('');
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join('');
    return reversedWord
}

console.log("Reversed word is: ", reverseString("hello there how are you?"))