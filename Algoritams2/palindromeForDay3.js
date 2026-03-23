function palindrome(str){
    let reversed = ''
for(let i = str.length-1;i >= 0;i--){
    str1 = str[i]
    reversed = reversed + str1
}
if(reversed !== str){
    return false
}else{
    return true
}
}
console.log(palindrome('racecar'));   //true

console.log(palindrome('hello'));      //false
