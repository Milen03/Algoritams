function intersection(list1,list2){
let result = []
for(let i = 0;i < list1.length;i++){
  for(let j = 0;j < list2.length;j++){
    if(result.includes(list1[i])){
        break
    }
    if(list1[i] == list2[j]){
        result.push(list1[i])
        break
    }
}
}

return result

}
console.log(intersection([1,2,2,1], [2,2])); //[2]
console.log(intersection([1,2,3], [4,5])); //[]
