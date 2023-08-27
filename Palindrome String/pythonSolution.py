#User function Template for python3
class Solution:
    def isPalindrome(self, S):
        # code here
        left = 0
        right = len(S) - 1
        
        while left < right:
            if S[left] != S[right]:
                return 0
            left += 1
            right -= 1
        
        return 1