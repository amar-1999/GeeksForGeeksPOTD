#User function Template for python3

from typing import List
from queue import Queue
class Solution:
    #Function to return Breadth First Traversal of given graph.
    def bfsOfGraph(self, V: int, adj: List[List[int]]) -> List[int]:
        # code here
        bfsTraversal = []
        visited = [False] * V  # To keep track of visited nodes
        queue = Queue()  # Queue to store nodes to be visited

        # Start BFS from node 0
        queue.put(0)
        visited[0] = True

        while not queue.empty():
            currentNode = queue.get()  # Get the front node from the queue
            bfsTraversal.append(currentNode)  # Add the current node to the result

            # Visit all adjacent nodes of the current node
            for neighbor in adj[currentNode]:
                if not visited[neighbor]:
                    queue.put(neighbor)
                    visited[neighbor] = True

        return bfsTraversal


#{ 
 # Driver Code Starts


if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		V, E = map(int, input().split())
		adj = [[] for i in range(V)]
		for _ in range(E):
			u, v = map(int, input().split())
			adj[u].append(v)
		ob = Solution()
		ans = ob.bfsOfGraph(V, adj)
		for i in range(len(ans)):
		    print(ans[i], end = " ")
		print()
        

# } Driver Code Ends