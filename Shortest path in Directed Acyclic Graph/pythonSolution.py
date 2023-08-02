#User function Template for python3

from typing import List
import heapq
class Solution:
    def shortestPath(self, n : int, m : int, edges : List[List[int]]) -> List[int]:
        pass
     # Step 1: Perform topological sorting
        in_degree = [0] * n
        graph = {i: [] for i in range(n)}

        for u, v, weight in edges:
            graph[u].append((v, weight))
            in_degree[v] += 1

        sources = [i for i in range(n) if in_degree[i] == 0]

        # Step 2: Apply Dijkstra's algorithm
        distances = [float('inf')] * n
        distances[0] = 0
        heap = [(0, 0)]

        while heap:
            dist, node = heapq.heappop(heap)
            if dist > distances[node]:
                continue

            for neighbor, weight in graph[node]:
                new_dist = dist + weight
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    heapq.heappush(heap, (new_dist, neighbor))

        # Step 3: Prepare the result
        result = [distances[i] if distances[i] != float('inf') else -1 for i in range(n)]
        return result


#{ 
 # Driver Code Starts

#Initial Template for Python 3

from typing import List




class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()



class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n,m=map(int,input().split())
        
        
        edges=IntMatrix().Input(m, 3)
        
        obj = Solution()
        res = obj.shortestPath(n, m, edges)
        
        IntArray().Print(res)
# } Driver Code Ends