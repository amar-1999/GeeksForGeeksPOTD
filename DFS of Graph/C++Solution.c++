//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
    private:
    // Helper function for recursive DFS traversal
    void dfsHelper(int vertex, vector<bool>& visited, vector<int>& result, vector<int> adj[]) {
        // Mark the current vertex as visited
        visited[vertex] = true;
        // Add the current vertex to the result vector
        result.push_back(vertex);
        // Explore all neighbors of the current vertex
        for (int neighbor : adj[vertex]) {
            if (!visited[neighbor]) {
                dfsHelper(neighbor, visited, result, adj);
            }
        }
    }
  public:
    // Function to return a list containing the DFS traversal of the graph.
    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        // Code here
        // Initialize a boolean vector to track visited vertices
        vector<bool> visited(V, false);
        // Initialize an empty vector to store the DFS traversal result
        vector<int> result;

        // Start the DFS traversal from vertex 0
        dfsHelper(0, visited, result, adj);

        return result;
        
    }
};

//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int V, E;
        cin >> V >> E;

        vector<int> adj[V];

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        // string s1;
        // cin>>s1;
        Solution obj;
        vector<int> ans = obj.dfsOfGraph(V, adj);
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends