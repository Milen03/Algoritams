function reverseString(string){
const newWord = []

for(let i = string.length-1;i >= 0;i--){
   let allWord = string[i]
   
   newWord.push(allWord)
   
}

console.log(newWord.join());

}
reverseString("hello") // "olleh"
reverseString("")      // ""
reverseString("a")     // "a"
// важен цикал string.length e 5 и за това казвал -- 1 за да може да почне да го прои като масив  