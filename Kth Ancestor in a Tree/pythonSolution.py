#User function Template for python3

def buildTree(s):
    if len(s) == 0 or s[0] == "N":
        return None

    ip = list(map(str, s.split()))
    root = Node(int(ip[0]))
    size = 0
    q = deque()
    q.append(root)
    size = size + 1

    i = 1
    while size > 0 and i < len(ip):
        currNode = q[0]
        q.popleft()
        size = size - 1

        currVal = ip[i]

        if currVal != "N":
            currNode.left = Node(int(currVal))
            q.append(currNode.left)
            size = size + 1

        i = i + 1
        if i >= len(ip):
            break
        currVal = ip[i]

        if currVal != "N":
            currNode.right = Node(int(currVal))
            q.append(currNode.right)
            size = size + 1
        i = i + 1
    return root
def kthAncestor(root,k, node):
    #code here
    def getMaxData(node):
        nonlocal maxData
        if not node:
            return
        maxData = max(maxData, node.data)
        getMaxData(node.left)
        getMaxData(node.right)

    maxData = 0
    getMaxData(root)

    ancestors = [0] * (maxData + 1)
    resizedAncestors = generateArray(root, ancestors, maxData)

    count = 0
    while node != -1:
        node = resizedAncestors[node]
        count += 1
        if count == k:
            break

    return node
    
def generateArray(root, ancestors, maxData):
    def dfs(node):
        if not node:
            return
        ancestors[node.data] = -1
        q = deque([node])

        while q:
            temp = q.popleft()

            if temp.left:
                ancestors[temp.left.data] = temp.data
                q.append(temp.left)

            if temp.right:
                ancestors[temp.right.data] = temp.data
                q.append(temp.right)

    ancestors[root.data] = -1
    dfs(root)

    return ancestors[:maxData + 1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import deque

class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None


def buildTree(s):
    # Corner Case
    if (len(s) == 0 or s[0] == "N"):
        return None

    # Creating list of strings from input
    # string after spliting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    size = 0
    q = deque()

    # Push the root to the queue
    q.append(root)
    size = size + 1

    # Starting from the second element
    i = 1
    while size > 0 and i < len(ip):
        # Get and remove the front of the queue
        currNode = q[0]
        q.popleft()
        size = size - 1

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if (currVal != "N"):
            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.left)
            size = size + 1
        # For the right child
        i = i + 1
        if (i >= len(ip)):
            break
        currVal = ip[i]

        # If the right child is not null
        if (currVal != "N"):
            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.right)
            size = size + 1
        i = i + 1
    return root



if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        k,node=[int(x) for x in input().split()]
        s = input()

        root = buildTree(s)
        print(kthAncestor(root,k,node))
# } Driver Code Ends