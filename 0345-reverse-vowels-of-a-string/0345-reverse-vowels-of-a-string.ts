function reverseVowels(s: string): string {
    const array:any[] = s.split(""), vowels = ['a','e','i','o','u'];
    let left = 0, right = array.length-1
    while(left < right){
        while(!vowels.includes(array[left].toLowerCase()) && left < right){
            left++
        }
        while(!vowels.includes(array[right].toLowerCase()) && left < right){
            right--
        }
        let temp = array[right]
        array[right] = array[left]
        array[left] = temp
        left++
        right--
    }
    return array.join('')
};