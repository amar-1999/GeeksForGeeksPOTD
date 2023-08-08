

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {

    largestPrimeFactor(N) {
        //code here
        let largestPrime = 2;

        while (N % 2 === 0) {
            N /= 2;
        }

        let currentFactor = 3;
        while (currentFactor * currentFactor <= N) {
            while (N % currentFactor === 0) {
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