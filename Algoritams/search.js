function search(arr,target){
for(let i =0;i < arr.length;i++){
    if(target === arr[i]){
        return i
    }
}
return -1
}
console.log(search([4,5,6,7,0,1,2],0));  //4
console.log(search([4,5,6,7,0,1,2], 3)) //-1;

