function secondLargest(number){
let maxNumber = 0
let seccountNumber = 0
 
for(let i = 0; i < number.length;i++){
    let num = number[i]
    if(num > maxNumber){
        maxNumber = num
    }
}

for(let j = 0;j < number.length;j++){
    if(maxNumber > number[j] ){
       if(number[j] > seccountNumber){
        seccountNumber = number[j]
       }
    }
    
    
}
console.log(seccountNumber);

}
secondLargest([1, 5, 3, 9, 7])   // 7
secondLargest([10, 10, 9])      // 9
secondLargest([1])              // null
secondLargest([])               // null
secondLargest([5,5,5])          // null

