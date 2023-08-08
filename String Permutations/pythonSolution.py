#User function Template for python3

class Solution:
    def permutation(self,s):
        result = []

        def permute(array, n):
            if n == 1:
                result.append(''.join(array))
                return

            for i in range(n):
                permute(array, n - 1)
                if n % 2 == 0:
                    array[i], array[n - 1] = array[n - 1], array[i]
                else:
                    array[0], array[n - 1] = array[n - 1], array[0]

        permute(list(s), len(s))
        return sorted(result)