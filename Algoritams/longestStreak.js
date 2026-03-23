function longestStreak(string){

let currentCount = 0
let maxCount = 0

for(let i = 0 ;i < string.length;i++){

   currentCount++

    if(string[i] != string[i+1]){
        if(currentCount > maxCount){
            maxCount = currentCount
        }

        currentCount = 0
    }
}

console.log(maxCount);

}

longestStreak("aaabbcaaa")   // 3  (aaa)
longestStreak("abc")        // 1
longestStreak("aaaa")       // 4
longestStreak("")           // 0
longestStreak("aabbbcc")    // 3
