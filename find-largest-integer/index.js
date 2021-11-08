console.log("Find the largest integer in an array");

let array = [0,34,89,200,11,-34]

// function findLargeNum(array){
//     let largeNum = array[0]
//     for(let i = 0; i < array.length; i++){
//         if(largeNum < array[i]){
//             largeNum = array[i]
//         }
//     }
//     return largeNum;
// }

function findLargeNumTwo(array){
    let largeNum = array.reduce((a,b) => Math.max(a,b),0);
    return largeNum;
}

console.log(findLargeNumTwo(array))