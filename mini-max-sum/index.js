console.log("Mini Max Sum");
// given an array of integers [1,2,3,4,5]
// find the mini sum -- sum of the first four integers 
// find the max sum -- sum of the last four integers 
// then print the totals side by side 

const miniMaxSum = (array) => {
    let sum = array.reduce((a,b) => a + b);
    let maxVal = Math.max(...array);
    let minVal = Math.min(...array);
    console.log((sum - minVal)+ ' ' +(sum - maxVal))
}
miniMaxSum([1,2,3,4,5]);
miniMaxSum([100,33,5,7,8]);

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.