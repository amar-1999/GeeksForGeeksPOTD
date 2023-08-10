#User function Template for python3

class Solution:
    
    #Function to find the length of longest common subsequence in two strings.
    def lcs(self,x,y,s1,s2):
        
        # code here
         # Creating a 2D array to store the lengths of longest common subsequences.
        dp = [[0] * (y + 1) for _ in range(x + 1)]

        # Filling the dp array using bottom-up dynamic programming approach.
        for i in range(1, x + 1):
            for j in range(1, y + 1):
                if s1[i - 1] == s2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        # The length of the longest common subsequence will be stored in dp[x][y].
        return dp[x][y]
