class RecentCounter {
    constructor() {
    }
    private recentReqs = []
    
    ping(t: number): number {
        while(this.recentReqs.length > 0 && this.recentReqs[0] < t - 3000){
            this.recentReqs.shift()
        }
        this.recentReqs.push(t)
        return this.recentReqs.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */