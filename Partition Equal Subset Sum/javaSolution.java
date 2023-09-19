

// User function Template for Java

class Solution{
    static int equalPartition(int N, int arr[])
    {
        // code here
         int sum = 0;
        for (int i = 0; i < N; i++) {
            sum += arr[i];
        }
        
        // If the sum is odd, it can't be partitioned into two equal parts
        if (sum % 2 != 0) {
            return 0;
        }
        
        int targetSum = sum / 2;
        
        // Create a 2D boolean DP array dp[i][j]
        // dp[i][j] will be true if there is a subset of elements from arr[0..i] with sum equal to j
        boolean dp[][] = new boolean[N + 1][targetSum + 1];
        
        // Initialize the first column as true because we can always make a sum of 0
        for (int i = 0; i <= N; i++) {
            dp[i][0] = true;
        }
        
        // Initialize the first row as false because we can't make a sum > 0 with an empty set
        for (int j = 1; j <= targetSum; j++) {
            dp[0][j] = false;
        }
        
        // Fill the DP table
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= targetSum; j++) {
                // If the current element is greater than the current sum, exclude it
                if (arr[i - 1] > j) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    // Otherwise, consider two cases: including the current element or excluding it
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
                }
            }
        }
        
        // If dp[N][targetSum] is true, it means there's a subset that adds up to targetSum
        // So, it's possible to partition the array into two equal parts
        if (dp[N][targetSum]) {
            return 1;
        } else {
            return 0;
        }
    }
}