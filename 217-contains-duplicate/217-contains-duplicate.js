/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const hash = {};
    for(const num of nums){
        if(hash[num]){
            return true;
        }
        hash[num] = true;
    }
    return false;
};