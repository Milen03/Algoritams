function areAnagrams(str1,str2){
    if(str1.length != str2.length){
        return false
    }

    let couter = {}
    for(let i = 0; i < str1.length;i++)
    {
        let char = str1[i]
        if(couter[char]){   //Ако имаш буква която вече я има в обекта 
            couter[char] += 1
        }else{
            couter[char] = 1
        }

    }

    for(let j = 0;j < str2.length;j++){
        let char2 = str2[j]
        if(!couter[char2]){
            return false
        }else{
            couter[char2] -=1
        }
    }
  
    return true
}

let result = areAnagrams("listen", "silent")  
let result2 = areAnagrams("hello", "olelh")     
let result3 = areAnagrams("test", "ttew")       
let result4 = areAnagrams("", "")              
let result5 = areAnagrams("a", "aa") 

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);




