function isSorted(nums){
for(let i = 0;i < nums.length;i++){
    let num = nums[i]
    if(num > nums[i+1]){
        return false
    }
}
return true
}

console.log(isSorted([1,2,3,4])); //true
console.log(isSorted([1,3,2])); //false

