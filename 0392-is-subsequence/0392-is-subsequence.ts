function isSubsequence(s: string, t: string): boolean {
    let indS:number = 0, indT:number = 0;
    while(indS < s.length && indT < t.length){
        if(s[indS] === t[indT])indS++
        indT++
    }
    return indS === s.length
};