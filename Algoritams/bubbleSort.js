function bubbleSort(num){
for(let i = 0;i < num.length;i++){
    for(let j = 0; j< num.length - i - 1;j++){
        if(num[j] > num[j + 1]){
            let tempt2 = num[j]
            num[j] = num[j+1]
            num[j+1] = tempt2
        } 
        
    }
}
console.log(num);

}
bubbleSort([6,5,3,1,8,7,2,4])
