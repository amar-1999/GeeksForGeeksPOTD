//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let a = new Array(n);

        input_line = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            a[i] = parseInt(input_line[i]);
        }

        let obj = new Solution();
        let ans = obj.longestSubsequence(n, a);
        if (ans == -0)
            ans = 0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} a
 * @returns {number}
*/
class Solution {
    //Function to find length of longest increasing subsequence.
    longestSubsequence(n, a) {
        let tails = [];

        tails.push(a[0]);
        for (let i = 1; i < n; i++) {
            if (a[i] > tails[tails.length - 1]) {
                tails.push(a[i]);
            } else {
                let pos = this.binarySearch(tails, a[i]);
                tails[pos] = a[i];
            }
        }

        return tails.length;
    }
    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

}