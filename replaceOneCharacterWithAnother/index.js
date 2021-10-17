console.log('replace one character with another')


const replaceChar = (inputString, replaceThis, withThis) => {
    let newString = [];
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] === replaceThis){
            newString.push(withThis)
        }else{
            newString.push(inputString[i])
        }
    }
    return newString.join('')
}

console.log("replace l with x", replaceChar('hello world', 'l', 'x'))
console.log("replace l with x", replaceChar('im a little tea pot', 'l', 'x'))