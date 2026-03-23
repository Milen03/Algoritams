function majoritiElement(nums){
let result = {}
for(let i = 0;i < nums.length;i++){
     if(result[nums[i]]){
        result[nums[i]] +=1 
     }else{
        result[nums[i]] = 1
     }
}

for(let j =0;j < nums.length;j++){
    if(result[nums[j]] > nums.length / 2){
        return nums[j]
    }
} 
}
console.log(majoritiElement([2,2,1,1,1,2,2])); //2
