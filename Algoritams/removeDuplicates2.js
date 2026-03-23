function removeDuplicates(arr){
let newArr = []

for(let i = 0;i < arr.length;i++){
    let allNumber = arr[i]

let isDuplicates = false

for(let j = 0;j < newArr.length;j++){
    if(allNumber == newArr[j]){
        isDuplicates = true
        break;
    }
}
if(!isDuplicates){
    newArr.push(allNumber)
}

}
console.log(newArr);


}

removeDuplicates([1,2,2,3,4,4,5])
removeDuplicates([1,2,1])
removeDuplicates([5,5,5,5])
removeDuplicates([])