console.log("Between Two Sets Solution");


// there will be an array of two integers. 
// determine all integers that satisfy two conditions: 
// 1. elements of the first array are all factors of the integer being considered. 
// 2. the integer being considered is a factor of all elements of the second array 
// these numbers are refferred to as being between the two arrays. Determine how many such numbers exist. 

function getTotalX(a,b){
    let count = 0;

    for(let i = 1; i <= 100; i++){
        if(a.every(int => (i % int == 0))){
            if(b.every(int => (int % i == 0))){
                count++;
            }
        }
    }
    return count;
}
console.log(getTotalX([2,6],[24,36]))