console.log("Find Pairs of Integers!")
// write a function that will pair up the array element whose sum is equal to a given number.
let arr = [1,5,6,0];

const findSumPairs = (arr, value) => {
    let sumsLookup = {};
    let output = [];

    for(let i = 0; i < arr.length; i++){
        let targetVal = value - arr[i];
        if(sumsLookup[targetVal]){
            output.push([arr[i], targetVal]);
        }
        sumsLookup[arr[i]] = true;
    }
    return output;
}
console.log(findSumPairs(arr, 6))
console.log(findSumPairs(arr, 5))

