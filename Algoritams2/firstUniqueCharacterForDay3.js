function firstUniqueChar(str){
let result = {}

for(let i = 0;i < str.length;i++){
    if(result[str[i]]){
        result[str[i]] += 1
    }else{
        result[str[i]] = 1
    }
}
 for(let j = 0;j < str.length;j++){
    if(result[str[j]] == 1){
        return str[j]
    }
    
 }
 return null
}

console.log(firstUniqueChar('loveleetcode'));  //v
