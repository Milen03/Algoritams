function moveZeros(nums){
let prevIndex = 0
for(let i = 0;i < nums.length;i++){
    
    if(nums[i] != 0){
        let zero = nums[prevIndex]
        nums[prevIndex] = nums[i]
        nums[i] = zero
        prevIndex++
    }
}
return nums

}

console.log(moveZeros([0,1,0,3,12]));  //[1,3,12,0,0]   
