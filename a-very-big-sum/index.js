console.log("A Very Big Sum")



function aVeryBigSum(ar) {
    // console.log(ar)
   let newAr = ar.reduce((acc, curr) => {
        return acc + curr
    },0);
    return newAr;

}

// adds up all the nums in the array 

console.log(aVeryBigSum([1,2,3,4,5]));