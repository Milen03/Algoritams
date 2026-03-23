function firstNonRepeating(word){
let countChars = {}

for(let i = 0; i < word.length;i++){
    if(countChars[word[i]]){
        countChars[word[i]] += 1
    }else{
        countChars[word[i]] = 1
    }
}

for(let i = 0;i < word.length;i++){
    if(countChars[word[i]] === 1){
        return word[i]
    }
}

return null
}

console.log(firstNonRepeating('loveleetcode'));  //v
console.log(firstNonRepeating('aabbcc'));        //null
console.log(firstNonRepeating('leetcode'));       //l