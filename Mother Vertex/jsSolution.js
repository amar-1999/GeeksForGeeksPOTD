

//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number}
*/
class Solution {
    //Function to find a Mother Vertex in the Graph.
    findMotherVertex(V, adj) {
        // code here
        let order = [];
        let vis = new Array(V).fill(false);

        const dfs1 = (node) => {
            vis[node] = true;

            for (let child of adj[node]) {
                if (!vis[child]) {
                    dfs1(child);
                }
            }

            order.push(node);
        };

        for (let i = 0; i < V; i++) {
            if (!vis[i]) {
                dfs1(i);
            }
        }

        vis.fill(false);

        let rem = V;

        const dfs2 = (node) => {
            vis[node] = true;
            rem--;

            for (let child of adj[node]) {
                if (!vis[child]) {
                    dfs2(child);
                }
            }
        };

        dfs2(order[order.length - 1]);

        return rem === 0 ? order[order.length - 1] : -1;
    }
}