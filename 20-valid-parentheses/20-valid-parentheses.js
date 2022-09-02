/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1) return false;
    // split string into array
    s = s.split('');
    const stack = [];
    let result = true;
// iterate from start and end of the array 
    s.forEach((paren) => {
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
        
    })
    if(stack.length > 0) return false;
    return result;
};


// {[]}