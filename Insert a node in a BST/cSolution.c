// User function Template for C

// struct Node {
//     int data;
//     struct Node* left;
//     struct Node* right;
// };

struct Node* insert_key(struct Node* root, int key) {
    // If the tree is empty, create a new node and return it as the new root.
    if (root == NULL) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = key;
        newNode->left = NULL;
        newNode->right = NULL;
        return newNode;
    }

    // Traverse the tree to find the appropriate position to insert the new node.
    if (key < root->data) {
        // Insert the new node in the left subtree.
        root->left = insert_key(root->left, key);
    } else if (key > root->data) {
        // Insert the new node in the right subtree.
        root->right = insert_key(root->right, key);
    }

    // If key is equal to the current node's data, do nothing (BST does not allow duplicates).

    // Return the modified root.
    return root;
}