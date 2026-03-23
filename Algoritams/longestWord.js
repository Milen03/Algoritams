function longestWord(words) {
    let longest = ''
    if(words.length == 0){
        return null
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    console.log(longest);

}
longestWord(["cat", "dog", "elephant", "bee"])
// "elephant"

longestWord(["a","ab","abc","abcd"])
// "abcd"

longestWord(["hello","hi","hey"])
// "hello"

console.log(longestWord([]));

// null