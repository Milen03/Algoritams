function firstUnique(word){
let couter = {}

for(let i = 0;i < word.length;i++){
    if(couter[word[i]]){
        couter[word[i]] +=1 
    }else{
        couter[word[i]] = 1
    }
}

for(let j = 0;j < word.length;j++){

    if(couter[word[j]] === 1){
       return j    
    }
}
return -1

}
console.log(firstUnique("leetcode")); // 0   (l)
console.log(firstUnique("loveleetcode"));  // 2   (v)
console.log(firstUnique("aabb")); // -1
console.log(firstUnique("")); // -1
