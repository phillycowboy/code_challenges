console.log('fibonacci solution')

const fibonacci = (num) => {
    let result = [0, 1];
    for(let i = 2; i<=num; i++){
        let prevNum1 = result[i - 1]
        let prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2);
    }
    return result[num];
}

console.log("this is the result of passing in 50", fibonacci(10))

// second solution 

const secondFibonacci = (num) => {
    if(num < 2){
        return num
    }
    return secondFibonacci(num - 1) + secondFibonacci(num - 2)
}

// console.log("second solution if 50 is passed in", secondFibonacci(50))

// going up to 50 will take a long time in the browser so be careful 

// third solution using a while loop 

// After a quick look, you can easily notice that the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3 or in maths:

// F(n) = F(n-1) + F(n-2)

const thirdFib = (num) => {
    var a = 1, b = 0, temp;

    while(num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--; 
    }
    return b;
}

console.log("iteration of fibonacci using a while loop", thirdFib(50))

// not quite sure this is doing what we want it to. 