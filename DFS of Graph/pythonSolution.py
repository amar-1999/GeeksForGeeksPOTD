#User function Template for python3

class Solution:
    
    #Function to return a list containing the DFS traversal of the graph.
    def dfsOfGraph(self, V, adj):
        # code here
        # Helper function for recursive DFS traversal
        def dfs_helper(vertex, visited, result):
            # Mark the current vertex as visited
            visited[vertex] = True
            # Add the current vertex to the result list
            result.append(vertex)
            # Explore all neighbors of the current vertex
            for neighbor in adj[vertex]:
                if not visited[neighbor]:
                    dfs_helper(neighbor, visited, result)

        # Initialize a list to track visited vertices
        visited = [False] * V
        # Initialize an empty list to store the DFS traversal result
        result = []
        # Start the DFS traversal from vertex 0
        dfs_helper(0, visited, result)

        return result

#{ 
 # Driver Code Starts

if __name__ == '__main__':
    T=int(input())
    while T>0:
        V,E=map(int,input().split())
        adj=[[] for i in range(V+1)]
        for i in range(E):
            u,v=map(int,input().split())
            adj[u].append(v)
            adj[v].append(u)
        ob=Solution()
        ans=ob.dfsOfGraph(V,adj)
        for i in range(len(ans)):
            print(ans[i],end=" ")
        print()
        T-=1
# } Driver Code Ends