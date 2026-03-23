function longestWord(words){
let longest = ''
if(words.length === 0){
    return null
}
for(let i = 0;i < words.length;i++){
    if(words[i].length > longest.length){
        longest = words[i]
    }   
}

return longest
}

console.log(longestWord(['cat','dog','elephant']));
