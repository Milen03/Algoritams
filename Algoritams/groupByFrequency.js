function groupByFrequency(number){
let counter = {}

for(let i = 0;i < number.length;i++){
    let num = number[i]
    counter[num] = (counter[num] || 0) +1
}

let keys = Object.keys(counter)

let result = {}

for(let j = 0; j < keys.length; j++ ){
    let key = keys[j]
    let count = counter[key]
    
    if(!result[count]){
        result[count] = []
    }
    result[count].push(Number(key))
}

return result

}
let otg = groupByFrequency([1,2,2,3,3,3])

console.log(otg);

// {
//   1: [1],
//   2: [2],
//   3: [3]
// }
