#User function Template for python3

class Solution:
    
    #Function to find position of first set bit in the given number.
    def getFirstSetBit(self,n):
        #Your code here
        position = 1
        
        # Iterate through the bits of n from right to left.
        while n > 0:
            # Check if the rightmost bit is set (i.e., it's 1).
            if n & 1:
                return position
            # If not, shift n to the right and increment the position.
            n >>= 1
            position += 1
        
        # If no set bit is found, return 0.
        return 0