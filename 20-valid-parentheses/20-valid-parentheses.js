/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // split string into array
    const stack = [];
    let result = true;
// iterate from start and end of the array 
    for(const paren of s) {
        if(paren === '('|| paren === '{' || paren === '[' ) stack.push(paren);
        
        console.log(stack[stack.length-1] === '(' && paren === ')')
        if(paren === ')' || paren === ']' || paren === '}'){
            if(stack[stack.length-1] === '(' && paren === ')'){
                stack.pop();
            } else if(stack[stack.length-1] === '{' && paren === '}'){
                stack.pop();
            } else if(stack[stack.length-1] === '[' && paren === ']'){
                stack.pop();
            } else{ result = false}
        }
        
    }
    if(stack.length > 0) return false;
    return result;
};


// {[]}