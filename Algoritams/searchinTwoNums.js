function missingNums(nums){
let MaxNum = 0
let hashMap = {}
for(let i = 0;i < nums.length;i++){
    if(nums[i] > MaxNum){
        MaxNum = nums[i]
    }
}

for(let j = 1;j <= MaxNum;j++){
nums.push(j)
}

for(let k = 0;k < nums.length;k++){

if(hashMap[nums[k]]){
    hashMap[nums[k]] += 1
}else{
    hashMap[nums[k]] = 1
}
 
}
let values =Object.values(hashMap)
 for(let x = 0;x <= values.length;x++){
    if(values[x] == 1){
        console.log(x+1); 
    }
 }


}
missingNums([1,2,3,4,6,8,9,10])
//[5,7]
