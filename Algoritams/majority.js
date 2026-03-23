function majority(nums){

    let result = {}

    for(let i = 0;i < nums.length;i++){
        let num = nums[i]

        if(result[num]){
            result[num] += 1
        }else{
            result[num] = 1
        }
    }

    for(let j = 0;j < nums.length;j++){
        if(result[nums[j]] > nums.length / 2){
            return nums[j]
        }
    }
    
}
console.log(majority([3,2,3])); // 3
console.log(majority([2,2,1,1,1,2,2]));// 2
console.log(majority([5,5,5,1,2]));  // 5