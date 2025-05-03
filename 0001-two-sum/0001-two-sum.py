class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash = {}
        for ind, num in enumerate(nums):
            if num in hash:
                return hash[num],ind
            else: 
                hash[target - num] = ind
         