//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    // Function to return Breadth First Traversal of given graph.
    vector<int> bfsOfGraph(int V, vector<int> adj[]) {
        // Code here
        vector<int> bfsTraversal;
        vector<bool> visited(V, false); // To keep track of visited nodes
        queue<int> queue; // Queue to store nodes to be visited

        // Start BFS from node 0
        queue.push(0);
        visited[0] = true;

        while (!queue.empty()) {
            int currentNode = queue.front(); // Get the front node from the queue
            queue.pop();
            bfsTraversal.push_back(currentNode); // Add the current node to the result

            // Visit all adjacent nodes of the current node
            for (int neighbor : adj[currentNode]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }

        return bfsTraversal;
    }
};

//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int V, E;
        cin >> V >>

            E;

        vector<int> adj[V];

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
            // 		adj[v].push_back(u);
        }
        // string s1;
        // cin>>s1;
        Solution obj;
        vector<int> ans = obj.bfsOfGraph(V, adj);
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends