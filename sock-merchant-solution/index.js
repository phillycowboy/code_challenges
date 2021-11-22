console.log("Sock Merchant Solution")

function sockMerchant(n, ar){
    let result = 0;
    ar.sort();
    for(let i = 0; i < n; i++){
        if(ar[i] === ar[i + 1]){
            i++;
            result++
        }
    }
    return result;
}


// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


// function sockMerchant(n, ar) {
//     // Write your code here
//     let result = 0;
//     ar.sort();
//     for(let i = 0; i < n; i++){
//         if(ar[i] === ar[i + 1]){
//             i++ 
//             result++
//         }
//     }
//     return result
// }