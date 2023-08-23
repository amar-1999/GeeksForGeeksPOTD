//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
public:
	vector<vector<int>>searchWord(vector<vector<char>>& grid, string word){
	    // Code here
	    vector<vector<int>> result;
        int n = grid.size();
        int m = grid[0].size();

        vector<pair<int, int>> directions = {
            {0, 1},  // horizontally right
            {0, -1}, // horizontally left
            {1, 0},  // vertically down
            {-1, 0}, // vertically up
            {1, 1},  // diagonal down-right
            {-1, 1}, // diagonal up-right
            {1, -1}, // diagonal down-left
            {-1, -1} // diagonal up-left
        };

        for (int x = 0; x < n; ++x) {
            for (int y = 0; y < m; ++y) {
                for (const auto& dir : directions) {
                    int dx = dir.first;
                    int dy = dir.second;
                    int newX = x + dx;
                    int newY = y + dy;
                    int i;

                    for (i = 1; i < word.size(); ++i) {
                        if (newX < 0 || newX >= n || newY < 0 || newY >= m ||
                            grid[newX][newY] != word[i]) {
                            break;
                        }
                        newX += dx;
                        newY += dy;
                    }

                    if (i == word.size()) {
                        result.push_back({x, y});
                    }
                }
            }
        }

        return result;
	}
};

//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, m;
		cin >> n >> m;
		vector<vector<char>>grid(n, vector<char>(m,'x'));
		for(int i = 0; i < n; i++){
			for(int j = 0; j < m; j++)
				cin >> grid[i][j];
		}
		string word;
		cin >> word;
		Solution obj;
		vector<vector<int>>ans = obj.searchWord(grid, word);
		if(ans.size() == 0)
		{
		    cout<<"-1\n";
		}
		else
		{
		    for(auto i: ans){
			for(auto j: i)
				cout << j << " ";
			cout << "\n";
		    }
		}
		
		
	}
	return 0;
}
// } Driver Code Ends