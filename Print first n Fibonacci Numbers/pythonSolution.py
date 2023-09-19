#User function Template for python3

class Solution:
    #Function to return list containing first n fibonacci numbers.
    def printFibb(self,n):
        # your code here
        # Initialize a list to store the Fibonacci numbers.
        fib_series = [0] * n
        
        # Base case: The first two Fibonacci numbers are 1 and 1.
        fib_series[0] = 1
        if n > 1:
            fib_series[1] = 1
        
        # Calculate the remaining Fibonacci numbers.
        for i in range(2, n):
            fib_series[i] = fib_series[i - 1] + fib_series[i - 2]
        
        return fib_series
        
        
