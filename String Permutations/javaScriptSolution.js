

//User function Template for javascript


/**
 * @param {string} str
 * @returns {string[]} 
 */

class Solution {
    permutation(str) {
        // code here
        const result = [];

        const permute = (current, remaining) => {
            if (remaining.length === 0) {
                result.push(current);
                return;
            }

            for (let i = 0; i < remaining.length; i++) {
                const next = current + remaining[i];
                const remainingChars = remaining.slice(0, i) + remaining.slice(i + 1);
                permute(next, remainingChars);
            }
        };

        permute('', str);
        return result.sort();
    }
}