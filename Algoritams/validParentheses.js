function isValid(s){
    let stack = []

    for(let i = 0; i < s.length; i++){
        let char = s[i]

        if(char === "(" || char === "{" || char === "["){
            stack.push(char)
        } 
        else {
            if(stack.length === 0){
                return false
            }
            let last = stack.pop()

            if(char === ")" && last !== "(") return false
            if(char === "}" && last !== "{") return false
            if(char === "]" && last !== "[") return false
        }
    }

    
    return stack.length === 0
}
//console.log(isValid("()"));  //true
//isValid("()[]{}") //true
//isValid("(]") //false
isValid("{[]}")  //true