class Solution {
  public:
    int isPerfectNumber(long long N) {
        // code here
        if (N <= 1) {
            return 0; // Perfect numbers are greater than 1
        }

        long long sum = 1; // Initialize sum with 1 since 1 is a factor of all numbers

        for (long long i = 2; i * i <= N; i++) {
            if (N % i == 0) {
                sum += i;
                if (i != N / i) {
                    sum += N / i;
                }
            }
        }

        return (sum == N) ? 1 : 0;
    }
};