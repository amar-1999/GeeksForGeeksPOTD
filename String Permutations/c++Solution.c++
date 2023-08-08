class Solution{
    public:
    //Complete this function
    
    vector<string> permutation(string S)
    {
        //Your code here
        vector<string> result;
        permute(S, 0, result);
        sort(result.begin(), result.end());
        return result;
    }
    private:
    void permute(string& S, int index, vector<string>& result) {
        if (index == S.length() - 1) {
            result.push_back(S);
            return;
        }

        for (int i = index; i < S.length(); i++) {
            swap(S[index], S[i]);
            permute(S, index + 1, result);
            swap(S[index], S[i]);
        }
    }
};