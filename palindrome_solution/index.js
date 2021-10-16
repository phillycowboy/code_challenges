console.log("This is the Palindorme solution")

const checkPalindrome = (string) => {
    if(string.toLowerCase() === string.toLowerCase().split("").reverse().join("")){
        return "This is a palindrome!"
    }else{
        return "Nope try again!"
    }
}

console.log("racecar --", checkPalindrome("racecar"))
console.log("car --", checkPalindrome("car"))

// checks to see if a word is spelled the same forwards as it is backwards