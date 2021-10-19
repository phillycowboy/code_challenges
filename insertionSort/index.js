console.log("INSERTION SORT");

let nums = [5,3,2,4,1]
let nums2 = [10,36,3,2,45]
let array = ["hello", "there", "how", "are", "you"]

const insertionSort = (nums) => {
    for(let i = 1; i < nums.length; i++){
        let j = i - 1;
        let tmp = nums[i];
        while(j >= 0 && nums[j] > tmp){
            nums[j + 1] = nums[j];
            j--

        }
        nums[j + 1] = tmp;
    }
    return nums;
}

console.log(insertionSort(array));

// sorts numbers in ascending value 
// and sorts strings by there first letter in ascending value! 