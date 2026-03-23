function firstNumberWithCountTwo(nums){
    let result = {}
    for(let i = 0;i<nums.length;i++){
        let num = nums[i]
        result[num] = (result[num] || 0) +1      
    }
    
    // let keys = Object.keys(result)
    // for(let i =0;i<keys.length;i++){
    //     let key = keys[i]
    //     if(result[key] === 2){
    //         console.log(key);
    //     }
   // }
    
}

firstNumberWithCountTwo([1,2,2,3,3,3])  // 2
firstNumberWithCountTwo([5,5,5,5])      // null
firstNumberWithCountTwo([1,2,3])        // null
firstNumberWithCountTwo([])             // null
