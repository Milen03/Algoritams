function areAnagrams(str1,str2){
let counChar = 0
for(let i = 0;i < str1.length;i++){
    let char1 = str1[i]
    for(let j = 0;j < str2.length;j++){
        let char2 = str2[j]
        if(char1 === char2){
            counChar++
            break
        }   
    }
}
if (str1.length === str2.length){
    if(counChar === str1.length){
        return true
    }
}

return false

}

let result = areAnagrams("listen", "silent")  
let result2 = areAnagrams("hello", "olelh")     
let result3 = areAnagrams("test", "ttew")       
let result4 = areAnagrams("", "")              
let result5 = areAnagrams("a", "aa")           

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

