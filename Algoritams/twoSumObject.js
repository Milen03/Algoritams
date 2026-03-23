function twoSum(nums,target){
    let result = {}
    let magigNum = 0
    for(let i = 0;i < nums.length;i++){
        let num = nums[i]

       magigNum = target - num

        
      if(result[magigNum] == true){  //в magigNum стои числото което трябва да сръвня 
            return true                    //  затова връща true  
      }
       result[num] = true
    
    }
    return false 
}
let resuld = twoSum([2, 7, 11, 15], 9)   // true  (2 + 7)
//let resuld2  = twoSum([1, 2, 3, 4], 10)   // false
//let resuld3 = twoSum([3, 3], 6)         // true
//let resuld4 = twoSum([], 5)             // false

console.log(resuld);
