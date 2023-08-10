

// User function Template for Java

class Solution {
    public long count(int coins[], int N, int sum) {
        // code here.
        long[] dp = new long[sum + 1];
        dp[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= sum; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[sum];
    }
}