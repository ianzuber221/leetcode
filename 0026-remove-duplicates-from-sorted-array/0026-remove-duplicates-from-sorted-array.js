/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let point = 1;
    for(let i = 1; i < nums.length; i++){
        while(nums[i] === nums[i - 1]){
            i++
        }
        nums[point] = nums[i];
        if(i !== nums.length)point++;
    }
    return point;
};