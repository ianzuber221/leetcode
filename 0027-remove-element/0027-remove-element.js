/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(const ind in nums){
        currentNum = nums[ind]
        if(currentNum !== val && ind !== k){
            nums[k] = currentNum
            k++
            }
    }
    return k
};