console.log("Welcome to the AddUpTo Solution")

const addUpTo = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

console.log("addUpTo", addUpTo(50))

// second solution 

const secondAddUpTo = (n) => {
    return n * (n + 1) / 2
}

console.log("secondAddUpToo", secondAddUpTo(50))

// solutions for adding the next number until the interger given is less than or equal to 