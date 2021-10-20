console.log("Sherlock and the Valid string")

// sherlock considers a string to be valid if all characters of a string appear the same number of times;
// it is also valid if he can remove just 1 character at 1 index in the string and the remaining characters will occur the same number of times;
// given a string s, determine if it is valid, if so return YES and other wise return NO;

const stringChecker = (string) => {
    let hash = {};
    let max, min;
    let minCount = 0;
    let maxCount = 0;
    // iterate over the string and see how many times they occur 
    for(let i = 0; i < string.length; i++){
        let key = string[i]
        if(hash[key]){
            hash[key]++;
        }else{
            hash[key] = 1;
        }
    }

    // take all the strings and put them into an array 

    let array = [];
    for(let key in hash){
        array.push(hash[key]);
    }
    // sort the array and get the max and min values it occurs 
    array.sort();
    min = array[0];
    max = array[array.length - 1];

    for(let i = 0; i < array.length; i++){
        if(array[i] === max){
            maxCount++;
        }
        if(array[i] === min){
            minCount++;
        }
    }
    // validate our strings 
    if(min === max){
        return "YES";
    }
    if(max - (min - 1) === max && minCount === 1 && maxCount !== 1){
        return "YES";
    }
    if(max - min !== 1){
        return "NO";
    }
    if(maxCount === minCount){
        return "NO"
    }
    if(maxCount === 1 || minCount === 1){
        return "YES"
    }
    return "NO";
}
console.log(stringChecker("abc"));
console.log(stringChecker("abcc"));
console.log(stringChecker("abcccccc"));
console.log(stringChecker("abccccccccccccccc"));