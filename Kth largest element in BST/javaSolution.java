

//User function Template for Java

/*
class Node
{
    int data;
    Node left;
    Node right;
    Node(int data)
    {
        this.data = data;
        left=null;
        right=null;
    }
}
*/
class Solution
{
    private int result;
    private int count;

    public int kthLargest(Node root, int K) {
        count = 0;
        result = 0;
        inOrderTraversal(root, K);
        return result;
    }
    // return the Kth largest element in the given BST rooted at 'root'
    private void inOrderTraversal(Node node,int K)
    {
        //Your code here
        if (node == null || count >= K) {
            return;
        }

        // Traverse the right subtree first (reverse in-order)
        inOrderTraversal(node.right, K);

        // Increment count for each visited node
        count++;

        // If count is equal to K, we found the Kth largest element
        if (count == K) {
            result = node.data;
            return;
        }

        // Continue traversing the left subtree
        inOrderTraversal(node.left, K);
    }
}