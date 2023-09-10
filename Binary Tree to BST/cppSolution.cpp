//User function template for C++

/* The Node structure is
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
}; 
*/

class Solution{
  public:
    // The given root is the root of the Binary Tree
    // Return the root of the generated BST
    Node *binaryTreeToBST (Node *root)
    {
        //Your code goes here
                vector<int> values;

        function<void(Node *)> dfs = [&](Node * cur) {
            if(cur == nullptr)
                return;

            values.push_back(cur -> data);

            dfs(cur -> left);
            dfs(cur -> right);
        };

        dfs(root);
        sort(values.begin(), values.end(), greater<int>());

        function<void(Node *)> build = [&](Node * cur) {
            if(cur == nullptr)
                return;

            build(cur -> left);
            cur -> data = values.back();
            values.pop_back();
            build(cur -> right);
        };

        build(root);

        return root;
    }
};