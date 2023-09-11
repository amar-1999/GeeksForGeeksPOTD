#User function Template for python3

class Solution:
    def isPerfectNumber(self, N):
        # code here 
        if N <= 1:
            return 0  # Perfect numbers are greater than 1

        total_sum = 1  # Initialize sum with 1 since 1 is a factor of all numbers

        for i in range(2, int(N**0.5) + 1):
            if N % i == 0:
                total_sum += i
                if i != N // i:
                    total_sum += N // i

        return 1 if total_sum == N else 0
