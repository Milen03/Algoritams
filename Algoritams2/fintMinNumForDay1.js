function fintMinNum(arr){
let minNum = arr[0]
for(let i = 0;i < arr.length;i++){
    if(minNum > arr[i]){
        minNum = arr[i]
    }
}

return minNum
}

console.log(fintMinNum([3,7,2,9,4]));
