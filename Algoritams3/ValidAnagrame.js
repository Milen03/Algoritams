function isValid(words1,words2){
let couter = 0

for(let i = 0;i < words1.length;i++){
    let char1 = words1[i]
for(let j = 0;j < words2.length;j++){
    let char2 = words2[j]
    if(char1 == char2){
        couter ++
        break
    }
}
}
if(couter == words1.length){
    return true
}else{
    return false
}
}
console.log(isValid("listen", "silent")); //true
console.log(isValid("hello", "world")); //false

