console.log("Migratory Birds Solution")
// given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type.
// If more than 1 type has been spotted that maximum amount, return the smallest of their id's 
// arr = [1,1,2,2,3]
// There are two each of types 1 and 2 and one sighting of 3. Pick the lower of the two types seen twice: type 1 

function migratoryBirds(arr){
    let largest = 1
    let counter = largest
    let type = 0
    arr.sort()
    for(let i = 0; i < arr.length; i++){
        largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1 
        if(largest > counter){
            counter = largest 
            type = arr[i]
        }
    }
    return type;
}
console.log(migratoryBirds([1,1,2,2,3]));