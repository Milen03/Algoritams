function isPalindrome(string){
let revString = ""

for(let i = string.length-1;i >= 0 ; i--){

    let allChar = string[i]
     
    revString += allChar
}

if(string === revString){
    return true
}else{
    return false
}

}

const resuld = isPalindrome("abba")  // true
const resuld2 = isPalindrome("abc")   // false
const resuld3 = isPalindrome("a")     // true
const resuld4 = isPalindrome("")      // true

console.log(resuld);
console.log(resuld2);
console.log(resuld3);
console.log(resuld4);

