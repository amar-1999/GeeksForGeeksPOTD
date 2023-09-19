#User function Template for python3

class Solution:
    #Function to count the number of ways in which frog can reach the top.
    def countWays(self,n):
        
        # code here
        mod = 1000000007

        # Create an array to store the number of ways to reach each step.
        ways = [0] * (n + 1)

        # There's only 1 way to reach step 0 (base case).
        ways[0] = 1

        # Loop through each step from 1 to N.
        for step in range(1, n + 1):
            # Calculate the number of ways to reach the current step by summing
            # the ways to reach the previous three steps (1, 2, and 3 steps before).
            for jump in range(1, 4):
                if step - jump >= 0:
                    ways[step] = (ways[step] + ways[step - jump]) % mod

        # Return the number of ways to reach the Nth step modulo 1000000007.
        return ways[n]
