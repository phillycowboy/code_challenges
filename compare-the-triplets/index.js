console.log("Compare the Triplets");
function compareTriplets(a, b) {
    console.log(a, b)
    let counterA = 0;
    let counterB = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            counterA++;
        }
        else if(a[i] < b[i]){
            counterB++
        }
    }
    return [counterA, counterB];
}

console.log(compareTriplets([1,2,3], [1,4,2]))

// check if two arrays have a greater than, less than or even value
// if a[i] is greater than b[i] counterA gets incremented by 1
// if a[i] is less than b[i] counterB gets incremented by 1
// if both are equal nothing happens and goes to the next set of integers
// return the counts in an array like value