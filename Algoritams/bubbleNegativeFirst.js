function bubbleNegativeFirst(num){
    for(let i = 0;i < num.length;i++){
        for(let j = 0;j < num.length - i - 1;j++){
            let positive = num[j] >=0
            let negative = num[j+1] < 0
            if(positive && negative){
                let temp = num[j]
                num[j] = num[j+1]
                num[j+1] = temp
            }
        }
    }
return num

}

let result = bubbleNegativeFirst([1, -2, 3, -4, 0])
// [-2, -4, 1, 3, 0]

let result2 = bubbleNegativeFirst([-1, -2, -3])
// [-1, -2, -3]

let result3 = bubbleNegativeFirst([1, 2, 3])
// [1, 2, 3]

let result4 = bubbleNegativeFirst([])
// []

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
