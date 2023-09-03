# User function Template for python3
from collections import deque
class Solution:
    def fill(self, n, m, mat):
        # code here
        # code here
        q = deque()
        for i in range(n):
            if mat[i][0] == "O":
                q.append((i, 0))
                mat[i][0] = "Y"
            if mat[i][m - 1] == "O":
                q.append((i, m - 1))
                mat[i][m - 1] = "Y"

        for j in range(m):
            if mat[0][j] == "O":
                q.append((0, j))
                mat[0][j] = "Y"
            if mat[n - 1][j] == "O":
                q.append((n - 1, j))
                mat[n - 1][j] = "Y"

        dx = [-1, 0, 0, 1]
        dy = [0, -1, 1, 0]
        while q:
            x, y = q.popleft()
            for k in range(4):
                nx = x + dx[k]
                ny = y + dy[k]
                if nx >= 0 and nx < n and ny >= 0 and ny < m and mat[nx][ny] == "O":
                    mat[nx][ny] = "Y"
                    q.append((nx, ny))

        for i in range(n):
            for j in range(m):
                if mat[i][j] == "O":
                    mat[i][j] = "X"
                elif mat[i][j] == "Y":
                    mat[i][j] = "O"

        return mat


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().split()]
        mat = []
        for i in range(n):
            s = list(map(str,input().split()))
            mat.append(s)
        
        ob = Solution()
        ans = ob.fill(n, m, mat)
        for i in range(n):
            for j in range(m):
                print(ans[i][j], end = " ")
            print()
# } Driver Code Ends