//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}
function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [n, m] = readLine()
            .trim()
            .split(" ")
            .map((x) => parseInt(x));

        let A = [];

        for (let j = 0; j < n * m; j += m) {
            let row = readLine()
                .trim()
                .split(" ")
                .map((x) => parseInt(x));
            A.push(row);
        }
        let [x, y] = readLine()
            .trim()
            .split(" ")
            .map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.shortestDistance(n, m, A, x, y);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} A
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */

class Solution {
    isValid(x, y, N, M, A, visited) {
        return x >= 0 && y >= 0 && x < N && y < M && A[x][y] === 1 && !visited[x][y];
    }
    shortestDistance(N, M, A, X, Y) {
        //code here
        if (A[0][0] === 0) {
            return -1;
        }

        // Create a visited array to keep track of visited cells
        const visited = Array.from({ length: N }, () => Array(M).fill(false));

        // Define the directions to move (up, down, left, right)
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        // Create a queue for BFS
        const queue = [{ x: 0, y: 0, steps: 0 }];

        // Mark the starting cell as visited
        visited[0][0] = true;

        while (queue.length > 0) {
            const { x, y, steps } = queue.shift();

            if (x === X && y === Y) {
                return steps;
            }

            // Explore all possible directions from the current cell
            for (let i = 0; i < 4; i++) {
                const new_x = x + dx[i];
                const new_y = y + dy[i];

                if (this.isValid(new_x, new_y, N, M, A, visited)) {
                    queue.push({ x: new_x, y: new_y, steps: steps + 1 });
                    visited[new_x][new_y] = true;
                }
            }
        }

        // If we reach here, it means there is no path to (X, Y)
        return -1;
    }
}