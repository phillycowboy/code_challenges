// console.log("Matrix Rotation");

// // you are given a 2d matrix of dimension and a positive integer. you have to rotate the matrix time and print the resultant matrix. Rotation should be in an 
// // anti-clockwise direction 

// const rotateMatrix = (matrix, r, offset) => {
//     const colLen = matrix[0].length - (offset * 2);
//     const rowLen = matrix.length - (offset * 2);

//     if(colLen === 0 || rowLen === 0){
//         return;
//     }

//     const flat = new Array(colLen * 2 + (rowLen - 2) * 2);

//     let xDir = 1;
//     let yDir = 0;
//     let col = offset;
//     let row = offset;

//     for(let i = 0; i < flat.length; i++){
//         const finalPos = i - (r % flat.length);
//         flat[finalPos < 0 ? finalPos + flat.length : finalPos] = matrix[row][col];
//         col += xDir;
//         row += yDir;

//         if(xDir > 0 && col === colLen - 1 + offset){
//             xDir = 0;
//             yDir = 1;
//         }else if(xDir < 0 && col === offset){
//             xDir = 0;
//             yDir = -1;     
//         }else if(yDir > 0 && row === rowLen - 1 + offset){
//             xDir = -1;
//             yDir = 0;
//         }else if(yDir < 0 && row === offset){
//             xDir = 1;
//             yDir = 0;
//         }
//     }

//     xDir = 1;
//     yDir = 0;
//     col = offset;
//     row = offset;

//     for(let i = 0; i < flat.length; i++){
//         matrix[row][col] = flat[i]

//         col += xDir;
//         row += yDir;

//         if(xDir > 0 && col === colLen - 1 + offset){
//             xDir = 0;
//             yDir = 1;
//         }else if(xDir < 0 && col === offset){
//             xDir = 0;
//             yDir = -1;
//         }else if(yDir > 0 && row === rowLen - 1 + offset){
//             xDir = -1;
//             yDir = 0;
//         }else if(yDir < 0 && row === offset){
//             xDir = 1;
//             yDir = 0;
//         }
//     }
// }

// console.log(rotateMatrix([2],2,2))

const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

// Output:
// console.log(A);
// [ [ 13,  9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] ]

const rotate = (matrix) => {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for(let i = 0; i < x; i++){
        for(let j = i; j < y - i; j++){
            k = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i];
            matrix[j][y -i] = k;
        }
    }
    return matrix;
}

console.log(matrix)
console.log(rotate(matrix))

// i guess counter clockwise would be plus instead of minus