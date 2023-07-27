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

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
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
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let l = input_ar2[0];
        let h = input_ar2[1];
        let obj = new Solution();
        let res = obj.LCA(root, l, h);
        console.log(res.data);

    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
*/


class Solution {
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2) {
        //your code here
        // Base case: If the root is null, or n1 and n2 are equal to the root value, return the root
        if (root === null || root.data === n1 || root.data === n2) {
            return root;
        }

        // If both n1 and n2 are greater than the current node value,
        // the LCA lies in the right subtree
        if (root.data < n1 && root.data < n2) {
            return this.LCA(root.right, n1, n2);
        }

        // If both n1 and n2 are smaller than the current node value,
        // the LCA lies in the left subtree
        if (root.data > n1 && root.data > n2) {
            return this.LCA(root.left, n1, n2);
        }

        // If n1 and n2 are on opposite sides of the current node,
        // then the current node is the LCA
        return root;
    }
}