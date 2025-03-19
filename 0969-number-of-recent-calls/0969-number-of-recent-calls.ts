class RecentCounter {
    constructor() {
    }
    recentReqs = []
    ping(t: number): number {
        this.recentReqs.push(t)
        let ind  = this.recentReqs.length - 1, numOfReqs = 0
        const range = this.recentReqs[ind] - 3000
        console.log(t,range)
        while(ind >= 0){
            if(this.recentReqs[ind] >= range) numOfReqs++
            ind--
        }
        return numOfReqs
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */