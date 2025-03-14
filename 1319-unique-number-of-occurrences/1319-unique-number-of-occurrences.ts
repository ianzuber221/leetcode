function uniqueOccurrences(arr: number[]): boolean {
    const hash = {}
    for(const num of arr){
        if(!hash[num]) hash[num] = 1
        else hash[num]++
    }
    return Object.values(hash).length === new Set(Object.values(hash)).size
};