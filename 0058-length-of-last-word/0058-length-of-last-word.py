class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        lastWord = False
        result  = ''
        while i >= 0:
            char =  s[i]
            if char == ' ' and not lastWord: 
                i -= 1
                continue
            if char == ' ' and lastWord:
                return len(result)
            if char != ' ':
                lastWord = True
                result += char
                i -= 1
        return len(result)