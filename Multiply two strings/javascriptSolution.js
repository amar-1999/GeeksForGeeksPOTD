

//User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    multiplyStrings(s1, s2) {
        //code here
        return (BigInt(s1) * BigInt(s2)).toString();

    }
}