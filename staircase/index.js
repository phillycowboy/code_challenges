console.log("Staricase Solution");

// create a right handed staircase with # symbols its base and height are both equal to n
// n = 6
//      #
//     ##
//    ###
//   ####
//  #####
// ######
// let n = 6;
function stairCase(n){
    for(let i = 1; i <= n; i++){
       console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}
stairCase(6)

