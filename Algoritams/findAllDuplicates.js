function findAllDuplicates(num){
    let result = []
    let dupNum = {}

    for(let i = 0; i < num.length;i++){
        let currentNum = num[i]
        dupNum[currentNum] = (dupNum[currentNum] || 0) +1

        if(dupNum[currentNum] === 2){
            result.push(currentNum)
        }
    }

    console.log(result);
    
}
findAllDuplicates([1,2,3,2,4,5,1,1]) // [2,1]
findAllDuplicates([1,2,3])          // []
findAllDuplicates([])               // []
findAllDuplicates([5,5,5])          // [5]
