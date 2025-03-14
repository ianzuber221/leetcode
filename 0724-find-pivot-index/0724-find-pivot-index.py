class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        leftSum, rightSum = 0, sum(nums)
        
        for ind, num in enumerate(nums):
            rightSum -= num
            if leftSum == rightSum:
                return ind
            leftSum += num
        return -1
        

        