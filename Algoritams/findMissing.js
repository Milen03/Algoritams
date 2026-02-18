function findMissing(number){
    let N = 0
   
    let firstArrSum = 0
    let seccontArrSum = 0

    for(let i = 0;i < number.length;i++){
        let num = number[i]
        firstArrSum += num
        if(num > N){
            N = num
        }
    }

    for(let j = N; j >= 1;j--){
        let num2 = j
        seccontArrSum += num2
    }

    if(N === number[0]){
        N = N + 1
        console.log(N);
        return
    }

    if(N == 0){
        N++
        console.log(N);
        return
    }

    let result = seccontArrSum - firstArrSum

    console.log(result);  
}


findMissing([1,2,4,5])   // 3
findMissing([2,3,1,5])   // 4
findMissing([1])         // 2   (ако приемем, че N = 2)
findMissing([])          // 1   (ако N = 1)

     
