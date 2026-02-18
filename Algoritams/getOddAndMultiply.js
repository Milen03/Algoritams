function getOddAndMultiply (arr,n){

const OddNum = []

for(let i= 0;i<arr.length;i++)
    {
    let allNum = arr[i]

    if(allNum % 2 !== 0){
        OddNum.push(allNum * n)
    }
}

return OddNum

}

const resuld = getOddAndMultiply([1,2,3,4,5,6,7,8,9,10],3)
console.log(resuld);
