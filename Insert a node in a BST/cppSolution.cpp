// Function to insert a node in a BST.

/*
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};
*/

class Solution
{
    public:
        Node* insert(Node* node, int data) {
        // If the tree is empty or we've reached an empty spot, create a new node.
        if (node == nullptr) {
            Node* newNode = new Node(data);
            return newNode;
        }

        // If the data is less than the current node's data, insert in the left subtree.
        if (data < node->data) {
            node->left = insert(node->left, data);
        }
        // If the data is greater than the current node's data, insert in the right subtree.
        else if (data > node->data) {
            node->right = insert(node->right, data);
        }
        // If data is equal to the current node's data, do nothing (BST does not allow duplicates).

        return node;
            // Your code goes here
    }

};