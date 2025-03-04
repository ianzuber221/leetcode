function strStr(haystack: string, needle: string): number {
    let i = 0, j = 0, result;
    while(i < haystack.length){
        if(haystack[i] === needle[0]){
            result = i
            while(j < needle.length){
                if(haystack[i] === needle[j]){
                    if(j=== needle.length - 1) return result
                    i++
                    j++
                }else{
                    j = 0;
                    i=result
                    break
                }
            }
        }
        i++
    }
    return -1
};