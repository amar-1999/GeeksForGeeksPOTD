
class Solution:
    
    #Function to find a Mother Vertex in the Graph.
    def findMotherVertex(self, V, adj):
        #Code here
        order = []
        vis = [False] * V

        def dfs1(node):
            vis[node] = True

            for child in adj[node]:
                if not vis[child]:
                    dfs1(child)

            order.append(node)

        for i in range(V):
            if not vis[i]:
                dfs1(i)

        vis = [False] * V
        rem = V

        def dfs2(node):
            nonlocal rem
            vis[node] = True
            rem -= 1

            for child in adj[node]:
                if not vis[child]:
                    dfs2(child)

        dfs2(order[-1])

        return order[-1] if rem == 0 else -1
