class Solution:
    def count(self, coins, N, Sum):
        # code here 
        dp = [0] * (Sum + 1)
        dp[0] = 1

        for coin in coins:
            for i in range(coin, Sum + 1):
                dp[i] += dp[i - coin]

        return dp[Sum]
