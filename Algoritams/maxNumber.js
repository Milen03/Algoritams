function maxNumber(arr){
    let max = arr[0]

    for(let i=0;i < arr.length;i++){

        let allNum = arr[i]

        if(allNum > max){
            max = allNum
        }
    }
    return max
    

}
const resuld = maxNumber([1,2,3,4,5,8,9,44,66,2])
console.log(resuld);
