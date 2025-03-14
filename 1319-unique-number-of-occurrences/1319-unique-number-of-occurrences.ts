function uniqueOccurrences(arr: number[]): boolean {
    const hash = {}
    for(const num of arr){
        if(!hash[num]) hash[num] = 1
        else hash[num]++
    }
    const hashValues = Object.values(hash)
    return hashValues.length === new Set(hashValues).size
};