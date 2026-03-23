function search(nums,target){
let leftIndex = 0
let rigthIndex = nums.length - 1


while(leftIndex <= rigthIndex){
    let midIndex = Math.floor((leftIndex + rigthIndex)/2)

    if(target === midIndex){
        return midIndex
    }
    if(target < nums[midIndex]){
        rigthIndex = midIndex - 1
    }else{
        leftIndex = midIndex + 1
    }
}
return -1
}

console.log(search([4,5,6,7,0,1,2], 0));   //4
search([4,5,6,7,0,1,2], 3) //-1