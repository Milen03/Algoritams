function moveZeroes(number){
let prevIndex = 0

for(let i = 0;i < number.length;i++){
    if(number[i] != 0){
        let holdZero = number[prevIndex]
        number[prevIndex] = number[i]
        number[i] = holdZero
        prevIndex++
    }
}
console.log(number);

}

moveZeroes([0,1,0,3,12])   // [1,3,12,0,0]
moveZeroes([1,2,3])       // [1,2,3]
moveZeroes([0,0,0])       // [0,0,0]
moveZeroes([])            // []
