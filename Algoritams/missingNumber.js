function missingNumber(nums){
    let allNumbers = 0
    let maxNum = 0
    let n = 0
    let curentAnser = 0
    for(let i = 0 ; i < nums.length;i++){
        if(maxNum < nums[i]){
            maxNum = nums[i]
        }
        allNumbers += nums[i]
    }
    
    for(let j = 0; j <= maxNum;j++){
        n += j
    }
     if(n == allNumbers){
        curentAnser ++
        return curentAnser
     }

    curentAnser = n - allNumbers
    return curentAnser
    
    
    
}
console.log(missingNumber([3,0,1]) );// 2
console.log(missingNumber([0,1]));          // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));  // 8
console.log(missingNumber([0]) );           // 1