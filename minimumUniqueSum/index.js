console.log('Minimum Unique Sum');

const minUniqueSum = (array) => {
    const temp = array.reduce((acc, cur) => {
        while(acc.includes(cur)) cur++;
        acc.push(cur);
        return acc;
    }, [])
    console.log(temp);
    return temp.reduce((acc, cur) => acc + cur, 0);
}
let result = minUniqueSum([1,1,1,10,3,2]);
console.log(minUniqueSum([1,2,2,3,4,5]));