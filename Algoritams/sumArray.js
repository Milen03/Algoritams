function sumArray(arr){
  let sum = 0
    for(let i = 0;i < arr.length;i++){

        allNum = arr[i]

        sum += allNum

    }
return sum 
  
}

const resuld = sumArray([1,2,3,4]) // 10
const resuld2 = sumArray([])        // 0
console.log(resuld);
console.log(resuld2);
