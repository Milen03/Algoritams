function removeDuplicates(arr){

    let newArr = []

    for(let i = 0;i < arr.length;i++){

        let allNumber = arr[i]

        if(allNumber != arr[i+1]){
            newArr.push(allNumber)
        }
    }

    console.log(newArr);
    
    
}

removeDuplicates([1,2,2,3,4,4,5]) // [1,2,3,4,5]
removeDuplicates([])             // []
removeDuplicates([1,1,1,1])      // [1]
