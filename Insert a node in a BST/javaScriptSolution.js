

// User function Template for javascript

/**
 * @param {Node} node
 * @param {number} data
 * @returns {Node}
*/

class Solution {
    // Function to insert a node in a BST.
    insert(node, data) {
        // your code here
        // If the tree is empty, create a new node and return it as the new root.
        if (node === null) {
            return new Node(data);
        }

        // If the data is less than the current node's value, insert in the left subtree.
        if (data < node.data) {
            node.left = this.insert(node.left, data);
        }
        // If the data is greater than the current node's value, insert in the right subtree.
        else if (data > node.data) {
            node.right = this.insert(node.right, data);
        }
        // If data is equal to the current node's data, do nothing (BST does not allow duplicates).

        return node;
    }
}