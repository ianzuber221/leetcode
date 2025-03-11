function reverseVowels(s: string): string {
    const array:any[] = s.split(""), vowels = [];
    for(const [ind,char] of array.entries()){
        if(['a','e','i','o','u'].includes(char.toLowerCase())){
            vowels.push(char)
            array[ind] = false
        }
    }
    let vowelInd = vowels.length - 1
    while(vowelInd >= 0){
        for(const [ind,char] of array.entries()){
            if(!char){
                array[ind] = vowels[vowelInd]
                vowelInd--
            } 
        }
    }
    return array.join('')
};