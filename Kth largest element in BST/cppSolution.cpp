/*The Node structure is defined as
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};
*/

// return the Kth largest element in the given BST rooted at 'root'
class Solution
{
    public:
    int kthLargestUtil(Node *root, int &K)
    {
        if (root == nullptr || K == 0)
            return -1; // Base case, return -1 to indicate that Kth largest element is not found.

        // Recursively traverse the right subtree
        int right = kthLargestUtil(root->right, K);

        // If Kth largest element is found in the right subtree, return it
        if (K == 0)
            return right;

        // If Kth largest element is not found in the right subtree, check the current node
        K--;
        if (K == 0)
            return root->data;

        // If Kth largest element is not found in the current node or right subtree, traverse the left subtree
        int left = kthLargestUtil(root->left, K);

        // If Kth largest element is found in the left subtree, return it
        return left;
    }

    int kthLargest(Node *root, int K)
    {
        //Your code here
        return kthLargestUtil(root, K);
    }
};