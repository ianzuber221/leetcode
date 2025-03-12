function findMaxAverage(nums: number[], k: number): number {
    let left = 0, right = k - 1, result:number;
    let sum = 0
    for(let i = left; i <= right; i++){
            const currentNumber = nums[i]
            sum += currentNumber
        }
        result = sum / k
        right++
        left++
        while(right <= nums.length){
            // if(k > 1 && nums[right] <= nums[left - 1]){
            //     left++
            //     right++
            //     continue
            // }
            sum+=nums[right]
            sum -= nums[left - 1]
            const average = sum / k
            if(result < average) result = average;
            left++
            right++
        }
        return result
};