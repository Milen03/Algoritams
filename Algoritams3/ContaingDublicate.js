function ContingDublicate(nums) {
let result = {}
for (let i = 0;i < nums.length;i++){
    if(result[nums[i]]){
        result[nums[i]] += 1
    }else{
        result[nums[i]] = 1
    }

    
}
 for(let j = 0; j < nums.length;j++){
    if(result[nums[j]] == 2){
        return true
    }else{
        return false
    }
 }
}

console.log(ContingDublicate([1,2,3,1]) ); //true
console.log(ContingDublicate([1,2,3,4]) ); //false
