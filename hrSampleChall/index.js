let arr = [];
function oddNumbers(l, r) {
    for(let i = l; i <= r; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr;
}

function findNumber(arr, k) {
    if(arr.includes(k)){
        return "YES"
    }else{
        return "NO"
    }

}