

// User function Template for Java

class Solution {
    // Function to insert a node in a BST.
    Node insert(Node root, int key) {
        // your code here
        // If the tree is empty, create a new node and return it as the new root.
        if (root == null) {
            return new Node(key);
        }

        // If the key is less than the current node's value, insert in the left subtree.
        if (key < root.data) {
            root.left = insert(root.left, key);
        }
        // If the key is greater than the current node's value, insert in the right subtree.
        else if (key > root.data) {
            root.right = insert(root.right, key);
        }
        // If the key is equal to the current node's value, do nothing (BST does not allow duplicates).

        return root;
    }
}