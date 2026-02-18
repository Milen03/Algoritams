function firstRepeating(number){
    let countNums = {}
    
    for(let j = 0;j < number.length; j++ ){
        let num = number[j]
        if(countNums[num]){
            countNums[num] += 1
        }else{
            countNums[num] = 1
        }

        if(countNums[num] == 2){
            return num 
        }

        
    }
    if(countNums){
            return null
        }
    
    


    
}

let result = firstRepeating([1,2,3,2,5,3])   // 2
let result2 = firstRepeating([1,2,3,4])       // null
let result3 = firstRepeating([5,5,1,2])       // 5
let result4 = firstRepeating([])              // null


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);