class Solution {
  public:
    long long int count(int coins[], int N, int sum) {

        // code here.
        long long int dp[sum + 1] = {0};
        dp[0] = 1;

        for (int i = 0; i < N; i++) {
            for (int j = coins[i]; j <= sum; j++) {
                dp[j] += dp[j - coins[i]];
            }
        }

        return dp[sum];
    }
};