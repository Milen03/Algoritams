function countOccurrences(arr,n){

    let magigNum = 0
    for(let i = 0;i < arr.length;i++){

       let allNumer = arr[i]

        if(allNumer === n){
            magigNum++
        }
    }

    return magigNum
    
}

const arr1 = countOccurrences([1,2,3,2,2,4], 2) // 3
const arr2 = countOccurrences([5,5,5,5], 5)     // 4
const arr3 = countOccurrences([], 3)            // 0
console.log(arr1);
console.log(arr2);
console.log(arr3);

