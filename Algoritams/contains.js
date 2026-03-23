function contains(num,x){

    for(let i = 0;i<num.length;i++){

        let allNum = num[i]

        if(allNum == x){
            return true
        }
    }

   return false
    
}

const arr1 = contains([1, 4, 6, 9], 6) // true
const arr2 = contains([1, 4, 6, 9], 5) // false
console.log(arr1);
console.log(arr2);
