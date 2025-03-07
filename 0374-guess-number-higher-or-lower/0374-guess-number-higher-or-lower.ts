/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left = 1, right = n
    while(left <= right){
        const midNum = (left + right)/2
        const response = guess(midNum)
        if(response === 0) return midNum;
        if(response === 1)left = midNum;
        if(response === -1)right = midNum;

    }
};