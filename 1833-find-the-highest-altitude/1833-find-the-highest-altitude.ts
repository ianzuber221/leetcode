function largestAltitude(gain: number[]): number {
    let currentAlt = 0, highestAlt = 0
    for(const alt of gain){
        currentAlt += alt
        if(currentAlt > highestAlt) highestAlt = currentAlt
    }
    return highestAlt
};