function removeStars(s: string): string {
    const stack = []
    for(const letter of s){
        if(letter === '*') stack.pop()
        else stack.push(letter)
    }
    console.log(stack)
    return stack.join('')
};