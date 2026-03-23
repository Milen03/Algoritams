function hasCommon(nums1,nums2){
for(let i = 0;i < nums1.length;i++){
    let num1 = nums1[i]
    for(let j = 0;j < nums2.length;j++){
        let num2 = nums2[j]
        if(num1 === num2){
            return true
        }
    }
}
return false
}

console.log(hasCommon([1,2,3], [4,5,3]));   // true
console.log(hasCommon([1,2], [3,4]));  // false
console.log(hasCommon([], [1,2]));   // false
console.log(hasCommon([5], [5])); // true
