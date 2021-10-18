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