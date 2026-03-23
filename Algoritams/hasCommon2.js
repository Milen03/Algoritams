function hasCommon2(nums1,nums2){
    let seen = {}
for(let i = 0;i < nums1.length;i++){
    seen[nums1[i]] = true  
}

for(let i = 0;i < nums2.length;i++){
    if(seen[nums2[i]]){
        return true
    }
}
return false
}

console.log(hasCommon2([1,2,3], [4,5,3]));   // true
console.log(hasCommon2([1,2], [3,4]));  // false
console.log(hasCommon2([], [1,2]));   // false
console.log(hasCommon2([5], [5])); // true