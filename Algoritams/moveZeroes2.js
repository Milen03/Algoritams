function moveZeroes(nums){
    let result = []
    for(let i = 0;i < nums.length;i++){
        if(nums[i] !== 0){
            result.push(nums[i])
        }
    }

    for(let i = 0;i < nums.length;i++){
        if(nums[i] === 0){
            result.push(nums[i])
        }
    }

    console.log(result);
    
    
}
moveZeroes([0,1,0,3,12])   // [1,3,12,0,0]
moveZeroes([1,2,3])       // [1,2,3]
moveZeroes([0,0,0])       // [0,0,0]
moveZeroes([])            // []
