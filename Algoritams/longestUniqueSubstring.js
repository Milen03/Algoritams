function longestUniqueSubstring(letars){
    let maxCount = 0
    let coun = 0
    let charCount = {}
for(let i = 0; i < letars.length;i++){
   let char = letars[i]
   charCount[char] = (charCount[char] || 0) + 1

   if(charCount[char] > 1){
    coun = 0
   }
   coun++
    if(coun > maxCount){
        maxCount = coun
    }
}


console.log(maxCount);




}

longestUniqueSubstring("abcabcbb")   // 3   ("abc")
longestUniqueSubstring("bbbbb")      // 1   ("b")
longestUniqueSubstring("pwwkew")     // 3   ("wke")
longestUniqueSubstring("")           // 0
longestUniqueSubstring("au")         // 2
