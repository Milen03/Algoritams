function twoSum(nums,k){
    let result = []
    for(let i = 0;i < nums.length;i++){
        let num1 = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            if(num1 + num2 === k){
                result.push(i,j)
                return result
            }
            
        }
    }
return null

}
console.log(twoSum([2,7,11,15], 9));  // [0,1]
console.log(twoSum([3,2,4], 6));              //[1,2]
console.log(twoSum([3,3], 6));           // [0,1]
console.log(twoSum([1,2,3], 7));    // null
