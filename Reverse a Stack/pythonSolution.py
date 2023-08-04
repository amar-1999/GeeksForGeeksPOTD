#User function Template for python3

from typing import List

class Solution:
    def reverse(self,St): 
        #code here
        if not St:
            return

        stack_size = len(St)
        aux_stack = []

        for _ in range(stack_size):
            aux_stack.append(St.pop())

        St[:] = aux_stack

#{ 
 # Driver Code Starts

#Initial Template for Python 3

 
for _ in range(int(input())):
    N = int(input())
    St = list(map(int, input().split()))
    ob = Solution()
    ob.reverse(St)
    print(*St)
# } Driver Code Ends