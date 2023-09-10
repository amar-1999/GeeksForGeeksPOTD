// User function Template for C++

class Solution {
  public:
    int minimumMultiplications(vector<int>& arr, int start, int end) {
        // code here
         int n = arr.size();
        const int mod = 1e5;

        vector<int> d(mod, 1e9);
        queue<int> q;
        q.push(start);
        d[start] = 0;

        if(start == end)
            return 0;

        while(!q.empty()){
            int node = q.front();
            q.pop();

            for(auto i : arr){
                int child = (i * node) % mod;

                if(d[child] > d[node] + 1){
                    d[child] = d[node] + 1;

                    if(child == end)
                        return d[child];

                    q.push(child);
                }
            }
        }

        return -1;
    }
};