//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N, M, x, y;
            String S[] = read.readLine().split(" ");
            N = Integer.parseInt(S[0]);
            M = Integer.parseInt(S[1]);
            int a[][] = new int[N][M];
            for (int i = 0; i < N; i++) {
                String s[] = read.readLine().split(" ");
                for (int j = 0; j < M; j++) a[i][j] = Integer.parseInt(s[j]);
            }
            String s1[] = read.readLine().split(" ");
            x = Integer.parseInt(s1[0]);
            y = Integer.parseInt(s1[1]);
            Solution ob = new Solution();
            System.out.println(ob.shortestDistance(N, M, a, x, y));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    boolean isValid(int x, int y, int N, int M, int[][] A, boolean[][] visited) {
        return x >= 0 && y >= 0 && x < N && y < M && A[x][y] == 1 && !visited[x][y];
    }
    int shortestDistance(int N, int M, int A[][], int X, int Y) {
        // code here
        if (A[0][0] == 0) {
            return -1;
        }

        // Create a visited array to keep track of visited cells
        boolean[][] visited = new boolean[N][M];

        // Define the directions to move (up, down, left, right)
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};

        // Create a queue for BFS
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0, 0}); // Each element is {x, y, steps}

        // Mark the starting cell as visited
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
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
                    queue.offer(new int[]{new_x, new_y, steps + 1});
                    visited[new_x][new_y] = true;
                }
            }
        }

        // If we reach here, it means there is no path to (X, Y)
        return -1;
    }
};