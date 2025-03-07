/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const queue = []
    for(const num of nums)num !== 0 && queue.push(num);
    for(let i = 0; i < nums.length; i++){
        if(queue[i]){
            nums[i] = queue[i];
        }else{
            nums[i] = 0
        }

    }
};