const num = [1,2,3,4,5,6]
const positivNum=[]

for(i=0;i<num.length;i++){

    let allNumber = num[i]

    if(allNumber % 2 === 0){
       positivNum.push(allNumber * 3)
    } 
}


console.log(positivNum);