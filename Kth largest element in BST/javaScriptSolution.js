

//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} K
 * @return {number}
*/
class Solution {
    constructor() {
        this.result = null;
        this.count = 0;
    }

    kthLargest(root, k) {
        this.inOrderTraversal(root, k);
        return this.result;
    }

    inOrderTraversal(node, k) {
        if (node === null || this.count >= k) {
            return;
        }

        // Traverse the right subtree first (reverse in-order)
        this.inOrderTraversal(node.right, k);

        // Increment count for each visited node
        this.count++;

        // If count is equal to k, we found the kth largest element
        if (this.count === k) {
            this.result = node.data; // Change from "val" to "data"
            return;
        }

        // Continue traversing the left subtree
        this.inOrderTraversal(node.left, k);
    }

}