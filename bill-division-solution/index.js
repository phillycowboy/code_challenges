console.log("Bill Division HackerRank Solution")

function billDivision(bill, k, b){
    let total = parseInt(bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
    let annaChange = bill[k] / 2;
    console.log((total === b) ? "Bon Appetit" : annaChange)
}


// function bonAppetit(bill, k, b) {
//     let total = parseInt(bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
//     let annaChange = bill[k] / 2;
//     console.log((total === b) ? "Bon Appetit" : annaChange);

// }

