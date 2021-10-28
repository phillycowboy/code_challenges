console.log("Birthday Cake Candles");

// you have decided the cake will have one candle for each year of their total age.
// they will only be able to blow out the tallest of the candles.
// count how many candles are the tallest
// candles = [4,4,1,3]
// the maximum height of candles is 4
// there are 2 of them so return 2

function birthdayCakeCandles(candles){
    // find the biggest height(number)
    let maxHeight = Math.max(...candles);
    // set a counter 
    let maxHeightCount = 0;
    // iterate over the array
    for(let i = 0; i < candles.length; i++){
        // if any index of the array is deeply equaled to the tallest candles
        if(candles[i] === maxHeight){
            // increase the count by 1
            maxHeightCount = maxHeightCount + 1;
        }
    }
    // return number of candles the kid can blow out
    return maxHeightCount;
}

console.log(birthdayCakeCandles([4,4,4,1,3,4]));