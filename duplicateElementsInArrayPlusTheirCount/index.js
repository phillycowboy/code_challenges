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

// third solution 

// declare an empty object 
// iterate over the array using a for loop 
// in every iteration add a new entry in the object created in step 1 with the array element as key and with some fixed value 
// check for the presence of an entry in the object with the current array element as a key 
// if an entry is already there, means that the array had another element with the same value and terminate the loop 

const checkDuplicate = () => {
    let array3 = ["abc", "xy", "bb", "axz", "abc"];
    // empty object 
    let map = {};
    let result = false;
    for(let i = 0; i < array3.length; i++){
        // check if object contains entry with this element as key 
        if(map[array3[i]]){
            result = true;
            // terminate the loop 
            break;
        }
        // add entry in object with the element as key 
        map[array3[i]] = true;
    }
    if(result){
        document.write("Array contains duplicate elements");
    }else{
        document.write("Array does not contain duplicate elements");
    }
}
checkDuplicate();

// 4th solution using Set 
// a Set object can be created with array values by directly supplying the array to its constructor 
// if the array has duplicate values, then they will be removed by the Set. This means that the Set will only contain unique array elements 
// note the orgiinal array will not be modified. 

const checkDuplicateTwo = () => {
    let array4 = ["abc", "xy", "bb", "axz", "abc"];
    let result = false;
    // create a Set with array elements 
    const s = new Set(array4);
    // compare the size of the array and Set 
    if(array4.length !== s.size){
        result = true;
    }
    if(result){
        console.log("Array contains duplicate elements")
    }else{
        console.log("Array does not contain duplicate elements")
    }
}
checkDuplicateTwo();


// finish blog tomorrow with solutions and look at hackerrank algo page and look those up. 
