function removeDublicate(arr){
let hasMap = {}
let nums = []
for(let i = 0;i < arr.length;i++){
    if(hasMap[arr[i]]){
        hasMap[arr[i]] += 1
    }else{
        hasMap[arr[i]] = 1
    }

    if(hasMap[arr[i]] == 1){
        nums.push(arr[i])
    }
}

return nums
}
console.log(removeDublicate([1,1,2,2,3,4]));
