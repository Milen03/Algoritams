function secondLargestNum(nums){
let maxNums = 0
let secconNum = 0

for(let i = 0;i < nums.length;i++){
    if(nums[i] > maxNums){
        maxNums = nums[i]
    }
}

 for(let j = 0; j < nums.length;j++){
        if(maxNums > nums[j] > secconNum)
        {
            secconNum = nums[j]
        }
    }
if(secconNum){
    return secconNum
}else{
    return null
}
}
console.log(secondLargestNum([10,5,8,20])); // 10
console.log(secondLargestNum([1])); //null
