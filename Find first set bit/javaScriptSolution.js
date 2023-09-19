

//User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
*/


class Solution {
    //Function to find position of first set bit in the given number.
    getFirstSetBit(n) {
        // code here
        let position = 1;

        // Iterate through the bits of n from right to left.
        while (n > 0) {
            // Check if the rightmost bit is set (i.e., it's 1).
            if (n & 1) {
                return position;
            }
            // If not, shift n to the right and increment the position.
            n >>= 1;
            position += 1;
        }

        // If no set bit is found, return 0.
        return 0;

    }
}