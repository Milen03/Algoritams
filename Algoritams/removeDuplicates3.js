function removeDuplicates(nums) {
    if (nums.length === 0) return 0

    let uniqueIndex = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++
            nums[uniqueIndex] = nums[i]
        }
    }

    return uniqueIndex + 1
}

console.log(removeDuplicates([1,1,2]));
// масивът става [1,2,_]
// връща 2

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// масивът става [0,1,2,3,4,_...]
// връща 5