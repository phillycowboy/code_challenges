console.log("samples of how to find duplicate integers and count how many times they repeat")

// declare an empty object 
// iterate over the array using a for loop 
// using the array element as the key 
// incremnet value of the key if its presented or initialize the key to 1

const array = [4,3,6,3,4,3]

const countDuplicate = (array) => {
    let counts = {};

    for(let i = 0; i < array.length; i++){
        if(counts[array[i]]){
            counts[array[i]] += 1;
        }else{
            counts[array[i]] = 1;
        }
    }
    for(let prop in counts){
        if(counts[prop] >= 2){
            console.log(`${prop} counted: ${counts[prop]} times`);
        }
    }
    console.log(counts);
}
countDuplicate(array);

// finish up solutions for this one! 

// solution with forEach loop and for loop 

const array2 = ["pencil", "book", "pencil", "pencil"]

const countDuplicateTwo = (array2) => {
    const count = {};
    const result = [];

    array2.forEach(item => {
        if(count[item]){
            count[item] += 1;
            return 
        }
        count[item] = 1;
    });

    for(let prop in count){
        if(count[prop] >= 2){
            result.push(prop)
        }
    }
    console.log(count)
    return result;
}
countDuplicateTwo(array2)