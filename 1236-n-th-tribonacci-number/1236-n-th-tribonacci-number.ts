function tribonacci(n: number): number {
    let t0 = 0, t1 = 1, t2 = 1
    switch(n){
        case 0:
            return 0
            break;
        case 1:
            return 1
            break;
        case 2:
            return 1;
            break;
    }
    const recurse = (num = 3) => {
        let trib = t0 + t1 + t2
        if(num === n) return trib
        t0 = t1
        t1 = t2
        t2 = trib
        return recurse(num + 1)
    }
    return recurse()
};