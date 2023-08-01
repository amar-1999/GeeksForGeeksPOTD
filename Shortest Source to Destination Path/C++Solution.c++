//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    bool isValid(int x, int y, int N, int M, vector<vector<int>>& A, vector<vector<bool>>& visited) {
        return x >= 0 && y >= 0 && x < N && y < M && A[x][y] == 1 && !visited[x][y];
    }
    int shortestDistance(int N, int M, vector<vector<int>> A, int X, int Y) {
        // code here
        if (A[0][0] == 0) {
            return -1;
        }

        // Create a visited array to keep track of visited cells
        vector<vector<bool>> visited(N, vector<bool>(M, false));

        // Define the directions to move (up, down, left, right)
        vector<int> dx = {-1, 1, 0, 0};
        vector<int> dy = {0, 0, -1, 1};

        // Create a queue for BFS
        queue<vector<int>> q;
        q.push({0, 0, 0}); // Each element is {x, y, steps}

        // Mark the starting cell as visited
        visited[0][0] = true;

        while (!q.empty()) {
            vector<int> current = q.front();
            q.pop();
            int x = current[0];
            int y = current[1];
            int steps = current[2];

            if (x == X && y == Y) {
                return steps;
            }

            // Explore all possible directions from the current cell
            for (int i = 0; i < 4; i++) {
                int new_x = x + dx[i];
                int new_y = y + dy[i];

                if (isValid(new_x, new_y, N, M, A, visited)) {
                    q.push({new_x, new_y, steps + 1});
                    visited[new_x][new_y] = true;
                }
            }
        }

        // If we reach here, it means there is no path to (X, Y)
        return -1;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, M, x, y;
        cin >> N >> M;
        vector<vector<int>> v(N, vector<int>(M));
        for (int i = 0; i < N; i++)
            for (int j = 0; j < M; j++) cin >> v[i][j];
        cin >> x >> y;
        Solution ob;
        cout << ob.shortestDistance(N, M, v, x, y) << "\n";
    }
}
// } Driver Code Ends