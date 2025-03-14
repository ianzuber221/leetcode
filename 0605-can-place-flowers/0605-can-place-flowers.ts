function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let result = 0
    if(n === result)return true
    for(let ind = 0; ind < flowerbed.length; ind++){
    const plot = flowerbed[ind]
        if(
            plot === 0 && 
            (flowerbed[ind - 1] === 0 ||ind ===0) && 
            (flowerbed[ind + 1] === 0 || ind + 1 >= flowerbed.length)
            ){
            flowerbed[ind] = 1
            result++
        }
        if(result === n ) return true
    }    
    return false
};