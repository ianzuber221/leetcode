function twoSum(nums: number[], target: number): number[] {
    const hash = {};
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(hash[num] !== undefined)return [hash[num], i];
        hash[target-num] = i;
    }
};