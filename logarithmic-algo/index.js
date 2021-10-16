console.log("logarithmic algo")

const findSock = (array) => {
    let start = 0;
    let end = array.length;
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(array[mid] === "sock") return "sock";
        if(array[mid] < "sock"){
            start = mid + 1;
        }else{
            end = mid - 1
        }
    }
}

console.log("Does the array contain a sock ", findSock(["shirt","shoes","pants","gloves","hat","belt","sock"]))