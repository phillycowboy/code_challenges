console.log("Divisible Sum Pairs")

// Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisble by k 
// ar = [1,2,3,4,5,6]
// k = 5
// Three pairs meet the criteria [1,4], [2,3], [4,6]
// n is the length of the array
let arr = [1,2,3,4,5,6] 
let n = arr.length
let k = 5
function divisibleSumPairs(n,k,arr){
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i < j){
                if((arr[i] + arr[j]) % k === 0){
                    count++
                }
            }
        }
    }
    return count;
}
console.log(divisibleSumPairs(n, k, arr))