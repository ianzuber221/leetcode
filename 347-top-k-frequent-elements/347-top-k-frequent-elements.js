/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {};
    const result = [];
    const realResult = [];
    for(const num of nums){
        if(hash[num])hash[num]++
        else {hash[num] = 1}
    }
    for(const key in hash){
        result.push([key, hash[key]])
    }
    result.sort((a,b) => b[1] - a[1]);
    console.log(result)
    for(let i = 0; i < k; i++){
        realResult.push(result[i][0])
    }
    return realResult
};