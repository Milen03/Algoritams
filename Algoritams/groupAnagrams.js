function groupAnagrams(word){
    let obj = {}

    for(let i of word){
        let key = i.split('').sort().join('')

        if(!obj[key]){
            obj[key] = [i]
        }else{
            obj[key].push(i)
        }
    }

    return(Object.values(obj))
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
