console.log("Subarray Division Solution")

// Lily and Ron want to share a chocolate bar. Each of the squares has an integer on it. Lily decides to share a contigious segment of the bar selected 
// such that: 
// The length of the segment matches Rons birth month and, 
// The sum of the integers on the squares is equal to his birthday 
// Determine how many ways she can divide the chocalate
// s = [2,2,1,3,2]
// d = 4
// m = 2
// Lily wants to find two segments summing to Ron's birthday d = 4 with a length equalling his birth month, m = 2 in this case there are two segments meeting her criteria
// [2,2], [1,3]

function birthday(s,d,m){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let arr = s.slice(0 + i, m + i)
        if(arr.reduce((a,b) => a + b) === d){
            count++;
        }
    }
    return count;
}
console.log(birthday([2,2,1,3,2], 4, 2))