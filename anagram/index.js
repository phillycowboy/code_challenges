console.log("Anagram")

// anagram, build a function that takes in two strings
// it compares the two strings to see if the same number of characters repeats but they are spelled differently 
// if they are an anagram return true 
// if they are not an anagram return false

const anagrams = (string1, string2) => {
    // console.log(string1, string2)
    string1 = string1.replace(/[^\w]/g, '').toLowerCase()
    string2 = string2.replace(/[^\w]/g, '').toLowerCase()

    return sortString(string1) === sortString(string2)
}

const sortString = (string) => {
    return string.split('').sort().join('')
}
// Array.sort uses merge sort so its time complexity is O(nlogn).


console.log("result of listen, and silent being compared", anagrams("listen", "silent"))
console.log("result of cat, and dog being compared", anagrams("cat", "dog"))
console.log("result of race, and care being compared", anagrams("race", "care"))
console.log("result of racecar, and elephant being compared", anagrams("racecar", "elephant"))