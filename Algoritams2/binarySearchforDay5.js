function binarySearch(nums,target){
for(let i = 0;i < nums.length;i++){
    if(nums[i] === target){
        return i
    }
}
}

console.log(binarySearch([1,2,3,4,5,6],4));
