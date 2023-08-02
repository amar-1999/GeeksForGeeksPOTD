//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while (T-- > 0) {
			int n = sc.nextInt();
			int m = sc.nextInt();
			int[][] edge = new int[m][3];
			for (int i = 0; i < m; i++) {
				edge[i][0] = sc.nextInt();
				edge[i][1] = sc.nextInt();
				edge[i][2] = sc.nextInt();
			}
			Solution obj = new Solution();
			int res[] = obj.shortestPath(n, m,edge);
			for (int i = 0; i < n; i++) {
				System.out.print(res[i] + " ");
			}
			System.out.println();
		}
	}
}
// } Driver Code Ends


//User function Template for Java
class Solution {

	public int[] shortestPath(int N,int M, int[][] edges) {
		//Code here
		// Step 1: Perform topological sorting
        int[] inDegree = new int[N];
        List<List<int[]>> graph = new ArrayList<>(N);
        for (int i = 0; i < N; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int weight = edge[2];
            graph.get(u).add(new int[]{v, weight});
            inDegree[v]++;
        }

        Queue<Integer> sources = new LinkedList<>();
        for (int i = 0; i < N; i++) {
            if (inDegree[i] == 0) {
                sources.add(i);
            }
        }

        // Step 2: Apply Dijkstra's algorithm
        int[] distances = new int[N];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[0] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.add(new int[]{0, 0});

        while (!pq.isEmpty()) {
            int[] nodeData = pq.poll();
            int dist = nodeData[0];
            int node = nodeData[1];

            if (dist > distances[node]) {
                continue;
            }

            for (int[] neighbor : graph.get(node)) {
                int newDist = dist + neighbor[1];
                if (newDist < distances[neighbor[0]]) {
                    distances[neighbor[0]] = newDist;
                    pq.add(new int[]{newDist, neighbor[0]});
                }
            }
        }

        // Step 3: Prepare the result
        int[] result = new int[N];
        for (int i = 0; i < N; i++) {
            result[i] = (distances[i] != Integer.MAX_VALUE) ? distances[i] : -1;
        }
        return result;
	}
}