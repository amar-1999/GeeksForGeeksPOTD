

//User function Template for javascript

/**
 * @param {string} str
 * @return {string}
*/

class Solution {

    reverseWord(str) {
        //Your code here
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }
}