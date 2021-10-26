console.log("Plus Minus")

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(array){
    let positive = array.filter(num => num > 0).length / array.length;
    let negative = array.filter(num => num < 0).length / array.length;
    let zero = array.filter(num => num === 0).length / array.length;

    console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zero.toFixed(6))
};

console.log(plusMinus([-4,1,2,-3,0]))