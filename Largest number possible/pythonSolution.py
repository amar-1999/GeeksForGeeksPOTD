#User function Template for python3

class Solution:
    def findLargest(self, N, S):
        # code here
         # Handle special cases
        if N == 1 and 0 <= S <= 9:
            return S
        if S == 0 or S > 9 * N:
            return -1
    
        result = ""
        
        for i in range(N):
            # Fill the most significant digit with 9 if possible, otherwise fill with S
            if S >= 9:
                result += "9"
                S -= 9
            else:
                result += str(S)
                S = 0
    
        # If S becomes 0 after filling all digits, return the result as an integer
        if S == 0:
            return int(result)
        else:
            return -1
