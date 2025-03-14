function pivotIndex(nums: number[]): number {
    for(const [ind, num] of nums.entries()){
        let left = ind - 1, right = ind + 1
        let leftSum = 0, rightSum = 0
        while(left >= 0){
            leftSum+=nums[left]
            left--
        }
        while(right < nums.length){
            rightSum+=nums[right]
            right++
        }
        if(leftSum === rightSum) return ind
    }
    return -1
};