console.log("Find the Duplicates in an Array and remove them")

const findDups = (array) => {
    let result = [...new Set(array)];
    return result;
}

console.log("array is [1,2,3,3,3,3,3,4,5,6,7,7,7,8,9,10]", findDups([1,2,3,3,3,3,3,4,5,6,7,7,7,8,9,10]))
console.log("array is [7,7,7,7,7,7,7,7,7,7,7]", findDups([7,7,7,7,7,7,7,7,7,7,7]))