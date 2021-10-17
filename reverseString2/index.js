console.log("Reverse String 2")

// define a function that takes in a string, and reverses it when invoked. 

const reverseStringTwo = (string) => {
    return string.toLowerCase().split('').reverse().join('')
}

console.log("hello", reverseStringTwo("hello"))
console.log("is this the same result?", reverseStringTwo("is this the same result?"))
console.log("TO bE OR nOt TO bE", reverseStringTwo("TO bE OR nOt TO bE"))