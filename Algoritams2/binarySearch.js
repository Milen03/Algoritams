function binarySearch(arr,target){
let low = 0
let high = arr.length-1

while(low <= high){
    //Намери средата на текущия диапазон
    let mid = Math.floor((low + high) / 2)
    let guess = arr[mid]

    if(guess === target){
        return mid //Elementa e намерен връща индекса
    }

    if(guess > target){
        high = mid - 1 //Търсим в лявата половина 
    }else{
        low = mid + 1 //Търсим в дясната половина 
    }
}
return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6],4));
