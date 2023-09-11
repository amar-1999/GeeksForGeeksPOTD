

//User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    isLucky(n) {
        // code here
        if (n <= 0) {
            return false;
        }

        let x = 2;

        while (x <= n) {
            if (n % x === 0) {
                return false;
            }

            n -= Math.floor(n / x);
            x++;
        }

        return true;
    }
}