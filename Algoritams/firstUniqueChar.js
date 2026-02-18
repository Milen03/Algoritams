function firstUniqueChar(arr){
    let count = {}
    let resuld = []

    for(let i = 0; i < arr.length;i++ ){
        let char = arr[i]
        count[char] = (count[char] || 0) +1
    }

    let keys = Object.keys(count)

    for(let j = 0;j < keys.length;j++){
        let key = keys[j]
        if(count[key] === 1){
            resuld.push(key)
            console.log(resuld.join());
            return
        }
    }
    return null
    
}

firstUniqueChar("aabbcdd")  // "c"
firstUniqueChar("aabb")    // null (или "")
firstUniqueChar("abc")     // "a"
 
