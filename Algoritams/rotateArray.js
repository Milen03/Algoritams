function rotateArray(number,k){
     let leng = k % number.length  
    for(let i = number.length - 1;i >= 0;i--){
        if(leng > 0){
           let curentNum = number.pop()
           number.unshift(curentNum)
           leng--
        }
    }
    return number

}
console.log(rotateArray([1,2,3,4,5,6,7], 3));  //[5,6,7,1,2,3,4]
rotateArray([1,2], 3)  //[2,1]