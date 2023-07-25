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

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N")
        return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length)
            break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}



function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [k, node] = readLine().trim().split(" ").map((x) => parseInt(x));
        let s_tree = readLine().trim().split(" ");
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.kthAncestor(root, k, node);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
  * @param {Node} root
  * @param {number} k
  * @param {number} node
  * @return {number}
 */

class Solution {
    generateArray(root, ancestors, maxData) {
        ancestors[root.data] = -1;
        const q = [root];

        while (q.length !== 0) {
            const temp = q.shift();

            if (temp.left !== null) {
                ancestors[temp.left.data] = temp.data;
                q.push(temp.left);
            }

            if (temp.right !== null) {
                ancestors[temp.right.data] = temp.data;
                q.push(temp.right);
            }
        }

        // Resize the ancestors array based on the maximum node data
        return ancestors.slice(0, maxData + 1);
    }
    kthAncestor(root, k, node) {
        //code here
        // Get the maximum node data to determine the size of ancestors array
        let maxData = 0;
        function getMaxData(node) {
            if (!node) return;
            maxData = Math.max(maxData, node.data);
            getMaxData(node.left);
            getMaxData(node.right);
        }
        getMaxData(root);

        const ancestors = Array(maxData + 1).fill(0);
        const resizedAncestors = this.generateArray(root, ancestors, maxData);

        let count = 0;
        while (node !== -1) {
            node = resizedAncestors[node];
            count++;

            if (count === k) {
                break;
            }
        }

        return node;
    }
}  