class Solution{

	public:
	int perfectSum(int arr[], int n, int sum)
	{
        // Your code goes here
        const int mod = 1e9 + 7;

        vector<vector<long long>> dp(n + 1, vector<long long> (sum + 1, 0));
        dp[n][0] = 1;

        for(int i = n - 1; i > -1; i--){
            for(int j = 0; j < sum + 1; j++){
                long long take, notake;
                take = notake = 0;

                if(j >= arr[i])
                    take = dp[i + 1][j - arr[i]];
                notake = dp[i + 1][j];

                dp[i][j] = (take + notake) % mod;
            }
        }

        return dp[0][sum];
	}
	  
};