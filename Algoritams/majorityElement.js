function majority(nums){
    let result = {}

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]

        if(result[num]){
            result[num] += 1
        } else {
            result[num] = 1
        }

        if(result[num] > nums.length / 2){
            return num
        }
    }
}

console.log(majority([2,2,1,1,1,2,2]));
