console.log("Find The Vowels")

// Find The Vowels 

// should define a function that takes in a string

// determine what is a vowel 

// then iterate through the string 

// counts the vowels and returns the number of them

const findTheVowels = (string) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let letter of string.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log("should return 5!", findTheVowels('aeiou'))
console.log("should return 2!", findTheVowels('letter'))
console.log("should return 0!", findTheVowels('crypt'))
console.log("should return 6!", findTheVowels('EUOUAE'))