function reverseWords(s: string): string {
    const resultArr= [] 
    let word = []
    for(let i = s.length-1; i>=0; i--){
        const char = s[i]
        if(char != ' '){
            word.unshift(char)
        }else if(word.length){
            resultArr.push(word.join(''))
            word =[]
        }
    }
    if(word.length)  resultArr.push(word.join(''))
    return resultArr.join(' ')
};