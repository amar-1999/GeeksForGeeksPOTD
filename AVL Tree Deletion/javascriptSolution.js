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

class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

class Node {
    constructor(x) {
        this.data = x;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}
function setHeights(n) {
    if (n == null) return 0;
    n.height = 1 + Math.max(setHeights(n.left), setHeights(n.right));
    return n.height;
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] == 'N')
        return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();

    let ip_str = str.split(" ");

    for (let i = 0; i < ip_str.length; i++)
        ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== 0 && i < ip.length) {

        // Get and remove the front of the queue
        let currNode = queue[0];
        queue.shift();

        // Get the current node's value from the string
        let currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= ip.length)
            break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }
    setHeights(root);
    return root;
}

function isBST(n, lower, upper) {
    if (n == null) return true;
    if (n.data <= lower || n.data >= upper) return false;
    return isBST(n.left, lower, n.data) && isBST(n.right, n.data, upper);
}

function isBalanced(n) {
    if (n == null) {
        return new Pair(0, true);
    }

    let l = isBalanced(n.left);
    let r = isBalanced(n.right);

    if (Math.abs(l.first - r.first) > 1) return new Pair(0, false);

    return new Pair(1 + Math.max(l.first, r.first), l.second && r.second);
}

let s = "";

function isBalancedBST(root) {
    if (isBST(root, Number.MIN_VALUE, Number.MAX_VALUE) == false)
        s += ("BST voilated, inorder traversal : ");

    else if (isBalanced(root).second == false)
        s += ("Unbalanced BST, inorder traversal : ");

    else return true;
    return false;
}

function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    s = s + root.data + " ";
    inorder(root.right);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        s = "";
        let n = parseInt(readLine());
        let input_line = readLine().split(" ").map((x) => parseInt(x));
        let arr = new Array(n);
        for (let j = 0; j < n; j++) arr[j] = input_line[j];
        let obj = new Solution();
        for (let j = 0; j < n; j++) {
            root = obj.deleteNode(root, arr[j]);
            if (!isBalancedBST(root)) {
                break;
            }
        }
        if (root === null) {
            console.log("null");
        }
        else {
            inorder(root);
            console.log(s);
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.height = 1;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} data
 * @return {Node} 
*/
class Solution {
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    minValueNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }
    deleteNode(root, key) {
        //code here
        if (root === null) {
            return root;
        }

        if (key < root.data) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.data) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            const temp = this.minValueNode(root.right);
            root.data = temp.data;
            root.right = this.deleteNode(root.right, temp.data);
        }

        this.updateHeight(root);

        const balance = this.getBalanceFactor(root);

        // Left heavy
        if (balance > 1) {
            if (this.getBalanceFactor(root.left) >= 0) {
                return this.rightRotate(root);
            } else {
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        }

        // Right heavy
        if (balance < -1) {
            if (this.getBalanceFactor(root.right) <= 0) {
                return this.leftRotate(root);
            } else {
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        }

        return root;
    }
}