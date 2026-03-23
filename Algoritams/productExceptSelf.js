function productExceptSelf(nums){
let result = []
for(let i = 0;i < nums.length;i++){
    let totalSum = 1
    for(let j = 0;j < nums.length;j++){
        if(i == j){
            continue
        }
        totalSum *= nums[j]
    }
    result.push(totalSum)
}
console.log(result);

}
productExceptSelf([1,2,3,4])
// [24,12,8,6]

productExceptSelf([2,3,4,5])
// [60,40,30,24]

productExceptSelf([1,0,3,4])
// [0,12,0,0]
