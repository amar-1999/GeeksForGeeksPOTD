

class Solution 
{
    public:
    //Function to find a Mother Vertex in the Graph.
	int findMotherVertex(int V, vector<int>adj[])
	{
	    // Code here
	     vector<int> order;
	    vector<bool> vis(V, 0);

	    function<void(int)> dfs1 = [&](int node) {
	        vis[node] = 1;

	        for(auto child : adj[node])
	            if(!vis[child])
	                dfs1(child);

	        order.push_back(node);
	    };

	    for(int i = 0; i < V; i++){
	        if(!vis[i])
	            dfs1(i);
	    }

	    fill(vis.begin(), vis.end(), 0);

	    int rem = V;

	    function<void(int)> dfs2 = [&](int node) {
	        vis[node] = 1;
	        --rem;

	        for(auto child : adj[node])
	            if(!vis[child])
	                dfs2(child);
	    };

	    dfs2(order.back());

	    return (rem == 0) ? order.back() : -1;
	}

};