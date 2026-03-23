function houseRobber(house){
    let money = 0
    for(let i = 0; i < house.length; i+=2){
        money += house[i]
    }
    console.log(money);
    
}
houseRobber([2,7,9,3,1])