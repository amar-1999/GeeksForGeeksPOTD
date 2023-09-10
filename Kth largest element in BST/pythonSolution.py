#User function Template for python3

# class Node:
#     def __init__(self, val):
#         self.data = val
#         self.left = None
#         self.right = None

# return the Kth largest element in the given BST rooted at 'root'
class Solution:
    def __init__(self):
        self.result = None
        self.count = 0

    def kthLargest(self, root, k):
        self.inOrderTraversal(root, k)
        return self.result

    def inOrderTraversal(self, node, k):
        if not node or self.count >= k:
            return

        # Traverse the right subtree first (reverse in-order)
        self.inOrderTraversal(node.right, k)

        # Increment count for each visited node
        self.count += 1

        # If count is equal to k, we found the kth largest element
        if self.count == k:
            self.result = node.data
            return

        # Continue traversing the left subtree
        self.inOrderTraversal(node.left, k)
