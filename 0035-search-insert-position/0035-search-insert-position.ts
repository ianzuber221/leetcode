function searchInsert(nums: number[], target: number): number {
for (const [ind, num] of nums.entries()) {        
        if(num > target)return ind 
        if(num === target) return ind
    }
    return nums.length 
};