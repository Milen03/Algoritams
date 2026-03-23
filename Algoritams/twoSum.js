function twoSum(number,target){

    for(let i = 0;i < number.length;i++){
        let firstNum = number[i]
        for(let j = i + 1;j < number.length;j++){
            let seccontNum = number[j] 
           if(firstNum + seccontNum == target){
                    return true
            }
        }
    }

    return false

}
let resuld = twoSum([2, 7, 11, 15], 9)   // true  (2 + 7)
let resuld2  = twoSum([1, 2, 3, 4], 10)   // false
let resuld3 = twoSum([3, 3], 6)         // true
let resuld4 = twoSum([], 5)             // false

console.log(resuld);
console.log(resuld2);
console.log(resuld3);
console.log(resuld4);
