const nums = [5, 10, 15, 20, 25];

const newArr = []

for(let i= 0;i<nums.length;i++){

    allNum = nums[i];

    if(allNum > 10){
        newArr.push(allNum / 5)
    }
}

console.log(newArr);
