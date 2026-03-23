function rotateArray(nums,k){
let leng = k % nums.length

for(let i = nums.length - 1; i >= 0;i--){
    if(leng > 0){
        let moveNum = nums.pop()
        nums.unshift(moveNum)
        leng--
    }
}

return nums
}
console.log(rotateArray([1,2,3,4,5,6,7],3));
