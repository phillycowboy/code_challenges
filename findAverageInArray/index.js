console.log("Find the average of an array!")

const average = (array) => {
    let total = 0;
    for(const num of array){
        total += num
    }
    return total / array.length
}

console.log("average", average([5,10,13]))

// second solution with reduce method

const averageReduce = (array) => {
    return array.reduce((total, num) => total + num, 0) / array.length    

}

console.log("average with reduce", averageReduce([1,2,3,4]))

// helper method that checks to see if an array contains an average

const containsAverage = (array) => {
    const averageValue = average(array)
    for(const num of array){
        if(num === averageValue){
            return "Contains Average"
        }else{
            return "Does Not Contain Average"
        }
    }
}

console.log("contains average", containsAverage([9.333333333333334]))