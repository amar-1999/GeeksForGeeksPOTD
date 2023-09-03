#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3

#Contributed by Sudarshan Sharma
from collections import deque
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root
    

# } Driver Code Ends
#User function Template for python3

class Solution:
    # Helper function to check if two nodes are isomorphic
    def areIsomorphic(self, n1, n2):
        # If both nodes are None, they are isomorphic
        if not n1 and not n2:
            return True

        # If one of the nodes is None but the other is not, they are not isomorphic
        if (not n1 and n2) or (n1 and not n2):
            return False

        # If the data of the current nodes is not the same, they are not isomorphic
        if n1.data != n2.data:
            return False

        # Check if the subtrees are isomorphic without making recursive calls for both left and right swaps
        return (self.areIsomorphic(n1.left, n2.left) and self.areIsomorphic(n1.right, n2.right)) or \
               (self.areIsomorphic(n1.left, n2.right) and self.areIsomorphic(n1.right, n2.left))

    # Main function to check if the given trees are isomorphic
    def isIsomorphic(self, root1, root2):
        return self.areIsomorphic(root1, root2)

#{ 
 # Driver Code Starts.
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s1=input()
        s2=input()
        root1=buildTree(s1)
        root2=buildTree(s2)
        if Solution().isIsomorphic(root1,root2):
            print('Yes')
        else:
            print('No')
# } Driver Code Ends