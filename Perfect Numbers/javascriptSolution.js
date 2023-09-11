

//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {

    isPerfectNumber(n) {
        //code here
        if (n <= 1) {
            return 0; // Perfect numbers are greater than 1
        }

        let sum = 1; // Initialize sum with 1 since 1 is a factor of all numbers

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                sum += i;
                if (i !== n / i) {
                    sum += n / i;
                }
            }
        }

        return sum === n ? 1 : 0;
    }
}