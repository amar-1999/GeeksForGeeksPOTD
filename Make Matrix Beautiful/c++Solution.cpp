//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution
{
    public:
    //Function to find minimum number of operations that are required 
    //to make the matrix beautiful.
    int findMinOpeartion(vector<vector<int> > matrix, int n)
    {
        // code here 
        vector<int>row,col;
        for(int i=0;i<n;i++){
            int sum =0;
            for(int j=0;j<n;j++){
                sum+=matrix[i][j];
            }
            row.push_back(sum);
        }
        for(int i=0;i<n;i++){
            int sum =0;
            for(int j=0;j<n;j++){
                sum+=matrix[j][i];
            }
            col.push_back(sum);
        }
        sort(row.begin(),row.end());
        sort(col.begin(),col.end());

        int ans =0;
        if(row[n-1]>=col[n-1]){
            int val = row[n-1];
            for(int i=0;i<n-1;i++){
                ans+=(val-row[i]);
            }
        }
        else{
            int val = col[n-1];
              for(int i=0;i<n-1;i++){
                ans+=(val-col[i]);
            }
        }
        return ans;
        
    } 
};

//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<vector<int> > matrix (n,vector<int>(n));
        for(int i=0;i<n;i++)
            for(int j=0;j<n;j++)
                cin>>matrix[i][j];
        Solution ob;
        cout << ob.findMinOpeartion(matrix, n) << endl;
    }
    return 0;
}


// } Driver Code Ends