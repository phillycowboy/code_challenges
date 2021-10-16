console.log("FIZZBUZZ")

const fizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return "FIZZBUZZ";
    }else if(num % 3 === 0){
        return "FIZZ";
    }else if (num % 5 === 0){
        return "BUZZ";
    }else{
        return num;
    }
}

console.log("result of 15", fizzBuzz(15))
console.log("result of 3", fizzBuzz(3))
console.log("result of 5", fizzBuzz(5))
console.log("result of 32", fizzBuzz(32))

// fizzbuzz with iterating with a for loop? 

const secondFizzBuzz = (i) => {
    // for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return "fizzbuzz"
        } 
        else if(i % 3 === 0){
            return "fizz"
        }
        else if(i % 5 === 0){
            return "buzz"
        }else{
            return i
        }
    // }
}
console.log("result of 15 second", secondFizzBuzz(15))
console.log("result of 3 second", secondFizzBuzz(3))
console.log("result of 5 second", secondFizzBuzz(5))
console.log("result of 32 second", secondFizzBuzz(32))