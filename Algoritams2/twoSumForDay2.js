function twoSum(arr,target){
    let result = []
    for(let i = 0;i < arr.length;i++){
        let firstNum = arr[i]
        for(let j = 0; j < arr.length;j++){
            let seccontNum = arr[j]
            if(firstNum + seccontNum == target){
                result.push(i,j)
                return result
            }
        }
    }
    console.log(result);
    
}
console.log(twoSum([2,7,11,15],9));
