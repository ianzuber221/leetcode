function mergeAlternately(word1: string, word2: string): string {
    let i = 0, j=0, result = [];
    while(i < word1.length || j < word2.length){
        const num1 = word1[i], num2 = word2[j];
        if(num1) {
            result.push(num1)
        i++;
            }else{
                result.push(word2.slice(j))
                return result.join('')
            }
        if(num2) {
            result.push(num2)
        j++;
        }else{
            result.push(word1.slice(i))
            return result.join('')

        }
    }
    return result.join('');
};