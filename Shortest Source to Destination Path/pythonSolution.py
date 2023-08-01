#User function Template for python3
from collections import deque
class Solution:
    def isValid(self, x, y, N, M, A, visited):
        return x >= 0 and y >= 0 and x < N and y < M and A[x][y] == 1 and not visited[x][y]

    def shortestDistance(self,N,M,A,X,Y):
        #code here
        if A[0][0] == 0:
            return -1
        
        # Create a visited array to keep track of visited cells
        visited = [[False for _ in range(M)] for _ in range(N)]

        # Define the directions to move (up, down, left, right)
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]

        # Create a queue for BFS
        queue = deque([(0, 0, 0)])  # Each element is (x, y, steps)

        # Mark the starting cell as visited
        visited[0][0] = True

        while queue:
            x, y, steps = queue.popleft()

            if x == X and y == Y:
                return steps

            # Explore all possible directions from the current cell
            for i in range(4):
                new_x = x + dx[i]
                new_y = y + dy[i]

                if self.isValid(new_x, new_y, N, M, A, visited):
                    queue.append((new_x, new_y, steps + 1))
                    visited[new_x][new_y] = True

        # If we reach here, it means there is no path to (X, Y)
        return -1


#{ 
 # Driver Code Starts

#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N,M=map(int,input().strip().split())
        a=[]
        for i in range(N):
            s=list(map(int,input().strip().split()))
            a.append(s)
        x,y=map(int,input().strip().split())    
        ob=Solution()
        print(ob.shortestDistance(N,M,a,x,y))
        
# } Driver Code Ends