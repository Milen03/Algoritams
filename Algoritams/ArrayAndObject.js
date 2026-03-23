function magigNum(number){
let count = {};
let resuld = [];

for(let i = 0;i<number.length;i++){
    let num = number[i];
    count[num] = (count[num] || 0) + 1;
}

const keys = Object.keys(count);

for (let j = 0; j < keys.length;j++){
    let key = keys[j];
    if (count[key] === 3){
        resuld.push(Number(key))
    }
}

console.log(resuld);

}

magigNum([1,2,1,2,3,3,4,1,6])