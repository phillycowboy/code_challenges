console.log("Linear Time Algo")

const findSock = (array) => {
    for(const item of array){
        if(item === "sock") return true;
    
    }
}

console.log("Does this array contain a sock? ", findSock(["shirt", "pants", "shoes", "sock"]))