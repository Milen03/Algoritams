function fintMaxNum(arr){
    let maxNum = 0 
for(let i = 0;i < arr.length;i++){
    if(arr[i] > maxNum){
        maxNum = arr[i]
    }
}

return maxNum
}
console.log(fintMaxNum([3,7,2,9,4]));
