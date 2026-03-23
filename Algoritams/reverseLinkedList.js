function reverseList(head){
   for(let i = 0;i < head.length;i++){
    let num1 = head[i]
    for(let j = 0; j < head.length - i - 1;j++){
        if(head[j] < head[j+1]){
            let temt = head[j]
            head[j] = head[j+1]
            head[j + 1] = temt
        }
    }
   }
   console.log(head);
   
}
reverseList([1,2,3,4,5])