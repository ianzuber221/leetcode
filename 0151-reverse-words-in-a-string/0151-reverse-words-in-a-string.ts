function reverseWords(s: string): string {
    const resultArr= [] 
    let word = []
    for(const char of s){
        if(char != ' '){
            word.push(char)
        }else if(word.length){
            resultArr.push(word.join(''))
            word =[]
        }
    }
    if(word.length)  resultArr.push(word.join(''))
    return resultArr.reverse().join(' ')
};