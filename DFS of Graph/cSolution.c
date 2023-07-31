//{ Driver Code Starts
// Initial Template for C

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define N 10005

struct ListNode {
    int data;
    struct ListNode *next;
};

struct graph {
    struct ListNode *head[N];
};

struct edges {
    int src, dest;
};

void show_graph(struct graph *g, int n, int m) {
    for (int i = 0; i < n; i++) {
        struct ListNode *graph_ptr = g->head[i];
        if (graph_ptr != NULL) {
            printf("%d-->", i);
        }
        while (graph_ptr != NULL) {
            printf("%d ", graph_ptr->data);
            graph_ptr = graph_ptr->next;
        }
        printf("\n");
    }
}

struct graph *create_graph(struct edges arr_edges[], int n, int m) {
    struct graph *g = (struct graph *)malloc(sizeof(struct graph));

    for (int i = 0; i < n; i++) {
        g->head[i] = NULL;
    }

    for (int i = m - 1; i >= 0; i--) {
        int u = arr_edges[i].src, v = arr_edges[i].dest;

        // edge from u->v
        struct ListNode *newNode =
            (struct ListNode *)malloc(sizeof(struct ListNode));

        newNode->data = v;
        newNode->next = g->head[u];
        g->head[u] = newNode;

        // edge from v->u
        newNode = (struct ListNode *)malloc(sizeof(struct ListNode));

        newNode->data = u;
        newNode->next = g->head[v];
        g->head[v] = newNode;
    }

    return g;
}


// } Driver Code Ends
// User function Template for C

// } Driver Code Ends
// User function Template for C

void dfs_helper(int vertex, struct graph *g, int *visited) {
    visited[vertex] = 1;
    printf("%d ", vertex);

    struct ListNode *current = g->head[vertex];
    while (current != NULL) {
        int neighbor = current->data;
        if (!visited[neighbor]) {
            dfs_helper(neighbor, g, visited);
        }
        current = current->next;
    }
}
void dfs(struct graph *g, int n, int m) {
    // your code goes here.
    // Initialize an array to track visited vertices
    int visited[n];
    memset(visited, 0, sizeof(visited));

    // Start the DFS traversal from vertex 0
    dfs_helper(0, g, visited);
}

//{ Driver Code Starts.

int main() {
    int t = 1;

    while (t--) {
        int queries;
        scanf("%d", &queries);
        while (queries--) {
            int n, m;
            scanf("%d %d", &n, &m);
            struct edges arr_edges[m];
            for (int i = 0; i < m; i++) {
                int u, v;
                scanf("%d %d", &u, &v);
                arr_edges[i].src = u;
                arr_edges[i].dest = v;
            }

            struct graph *g = create_graph(arr_edges, n, m);

            dfs(g, n, m);
            printf("\n");
        }
    }
    return 0;
}

// } Driver Code Ends