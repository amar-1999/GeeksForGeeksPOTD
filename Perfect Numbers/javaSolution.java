

//User function Template for Java

class Solution {
    static int isPerfectNumber(long N) {
        // code here
         if (N <= 1) {
            return 0; // Perfect numbers are greater than 1
        }

        long totalSum = 1; // Initialize sum with 1 since 1 is a factor of all numbers

        for (long i = 2; i * i <= N; i++) {
            if (N % i == 0) {
                totalSum += i;
                if (i != N / i) {
                    totalSum += N / i;
                }
            }
        }

        return totalSum == N ? 1 : 0;
    }
};