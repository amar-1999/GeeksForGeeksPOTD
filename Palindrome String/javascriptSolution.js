

//User function Template for javascript

/**
 * @param {string} S
 * @return {number}
*/

class Solution {

    isPalindrome(S) {
        //code here
        let left = 0;
        let right = S.length - 1;

        while (left < right) {
            if (S[left] !== S[right]) {
                return 0;
            }
            left++;
            right--;
        }

        return 1;
    }
}