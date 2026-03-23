function isPalindrome(nums){
let numberToString = nums.toString()

let digits = []

let revDiguts = []

for (let i = 0; i < numberToString.length; i++) {

 digits.push(Number(numberToString.charAt(i)));
}


for(let j = digits.length-1;j >= 0 ; j--){
    revDiguts.push(digits[j])
}
let final1 = revDiguts.toString()
let final2 = digits.toString()

if(final1 == final2){
    return true
}else{
    return false
}
}
console.log(isPalindrome(121));
