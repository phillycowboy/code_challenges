console.log('Return the number an integer duplicates in an array');

const returnNumberOfDuplicates = (array) => {
    let counts = {};
    let duplicates = 0;

    array.forEach((num) => {
        counts[num] = (counts[num] || 0) + 1;
    });

    for(let key in counts){
        if(counts.hasOwnProperty(key)){
            counts[key] > 1 ? duplicates++ : duplicates;
        }
    }
    return duplicates;
}

console.log("should have 5 duplicates" , returnNumberOfDuplicates([1,2,2,3,3,4,4,5,5,6,6]))