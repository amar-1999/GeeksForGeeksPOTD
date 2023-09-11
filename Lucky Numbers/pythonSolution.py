#User function Template for python3

class Solution:
    def isLucky(self, n): 
        #RETURN True OR False
        if n <= 0:
            return False

        x = 2

        while x <= n:
            if n % x == 0:
                return False

            n -= n // x
            x += 1

        return True
