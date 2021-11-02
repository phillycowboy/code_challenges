console.log("Number Line Jumps");

// you are coreographing a circus show with various animals. for one act you are given two kangaroos on a number line ready to jump in the positive direction 
// (i.e. towards positive infinity)

// the first kangaroo starts at location x1 and moves at a rate of v1 meters per jump 

// the second kangaroo starts at location x2 and moves at a rate of v2 meters per jump 

// you have to figure out a way to get both kangaroos at the same location at the same time as part of the show if it is possible return YES otherwise return NO. 

function kangaroo(x1, v1, x2, v2){
    let result = "NO";
    for(let i = 0; i < 10000 && result === "NO"; i++){
        if(x1 + v1 * i === x2 + v2 * i){
            // checking to see if the kangaroos are in the same spot.
            result = "YES"
        }
    }
    return result;
}

console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,3,4));