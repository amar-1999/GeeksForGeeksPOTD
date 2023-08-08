

//User function Template for Java

class Solution{
    static long largestPrimeFactor(int N) {
        // code here
        long largestPrime = 2;

        while (N % 2 == 0) {
            N /= 2;
        }

        int currentFactor = 3;
        while (currentFactor * currentFactor <= N) {
            while (N % currentFactor == 0) {
                largestPrime = currentFactor;
                N /= currentFactor;
            }
            currentFactor += 2;
        }

        if (N > 1) {
            largestPrime = N;
        }

        return largestPrime;
    }
}