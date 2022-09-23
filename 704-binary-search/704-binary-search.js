/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0, right=nums.length-1,mid;
    while(left <= right){
        mid = Math.floor((right + left) / 2);
        if(nums[mid] === target)return mid;
        if(target > nums[mid])left = mid + 1;
        if(target < nums[mid]) right = mid - 1; 
    }
    return -1
};