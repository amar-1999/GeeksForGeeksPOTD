//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
     vector<int> shortestPath(int N,int M, vector<vector<int>>& edges){
        // code here
        // Step 1: Perform topological sorting
        vector<int> in_degree(N, 0);
        vector<vector<pair<int, int>>> graph(N);

        for (const vector<int>& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int weight = edge[2];
            graph[u].push_back({v, weight});
            in_degree[v]++;
        }

        vector<int> sources;
        for (int i = 0; i < N; i++) {
            if (in_degree[i] == 0) {
                sources.push_back(i);
            }
        }

        // Step 2: Apply Dijkstra's algorithm
        vector<int> distances(N, INT_MAX);
        distances[0] = 0;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, 0});

        while (!pq.empty()) {
            int dist = pq.top().first;
            int node = pq.top().second;
            pq.pop();

            if (dist > distances[node]) {
                continue;
            }

            for (const pair<int, int>& neighbor : graph[node]) {
                int new_dist = dist + neighbor.second;
                if (new_dist < distances[neighbor.first]) {
                    distances[neighbor.first] = new_dist;
                    pq.push({new_dist, neighbor.first});
                }
            }
        }

        // Step 3: Prepare the result
        vector<int> result;
        for (int dist : distances) {
            result.push_back(dist != INT_MAX ? dist : -1);
        }
        return result;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> edges;
        for(int i=0; i<m; ++i){
            vector<int> temp;
            for(int j=0; j<3; ++j){
                int x; cin>>x;
                temp.push_back(x);
            }
            edges.push_back(temp);
        }
        Solution obj;
        vector<int> res = obj.shortestPath(n, m, edges);
        for (auto x : res) {
            cout << x << " ";
        }
        cout << "\n";
    }
}

// } Driver Code Ends