console.log("Diagonal Difference");

// calculate the absolute difference of sums across the two diagonals of a square matrix
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function diagonalDifference(arr) {
    console.log(arr)
    let n = arr.length;
    let diagonalOne = 0;
    let diagonalTwo = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                diagonalOne += arr[i][j];
            }
            if(i + j === n - 1){
                diagonalTwo += arr[i][j];
            }        
        }
    }
    return Math.abs(diagonalOne - diagonalTwo);
    // The Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
}
console.log(diagonalDifference(arr));

// // matrix = [
//     [1,2,3],
//     [4.5,6],
//     [7,8,9]
// ]
// left to right diagonal would be 1,5,9 calculate the sum
// This one is pretty obvious. The main diagonal as it is called, contains those elements where the i index is equal to the j index.


// right to left diagonal would be 7,5,3 calculate the sum 
// As you might have noticed, if you add up the indexes on the second diagonal for this 3 * 3 matrix, you’ll always get a sum of 2. That’s the length of the matrix minus one. This will work for any given n * n matrix. 

// then take the sums of both diagonals and subtract them and return them
// hence the difference