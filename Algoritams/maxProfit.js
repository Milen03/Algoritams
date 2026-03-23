function maxProfit(nums){
    let minNum = nums[0]
    let maxNum = 0

for(let i = 0;i < nums.length;i++){
    if(nums[i] < minNum){
        minNum = nums[i]
    }else {
            let profit = nums[i] - minNum
            if(profit > maxNum){
                maxNum = profit
            }
        }
}
console.log(maxNum);

}
maxProfit([7,1,5,3,6,4])  // 5
// купуваш на 1, продаваш на 6

maxProfit([7,6,4,3,1])    // 0
// няма печалба