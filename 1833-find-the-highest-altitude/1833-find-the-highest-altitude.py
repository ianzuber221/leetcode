class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        currentAlt, highestAlt = 0,0
        for alt in gain:
            currentAlt += alt
            if highestAlt < currentAlt:
                highestAlt = currentAlt
        return highestAlt