function mostFrequent(number){
    let counter = {}
    let maxCount = 0
    let mostFrequentValue = 0

    for(let i = 0;i < number.length; i++){
        let num = number[i]
        counter[num] = (counter[num] || 0) +1

        if(counter[num] > maxCount){
            maxCount = counter[num]
            mostFrequentValue = num
        }

    }

    
console.log(mostFrequentValue);    

 

}
mostFrequent([7,2,2,3,3,3,4])     // 3
mostFrequent([5,5,5,5])           // 5
mostFrequent([1,2,3])             // 1 (или който е първи с max честота)
mostFrequent([])                  // null

