function MergeList(list1,list2){
    for(let i = 0; i < list2.length;i++){
        list1.push(list2[i])
    }   

    for(let i = 0; i < list1.length;i++){
        for(let j = 0;j < list1.length - i - 1;j++){
            if(list1[j] > list1[j + 1]){
                let tempt = list1[j]
                list1[j] = list1[j + 1]
                list1[j + 1] = tempt
            }
        }
    }
    console.log(list1);
    
    
}
MergeList([1,3,4],[1,2,4])
MergeList([],[0])