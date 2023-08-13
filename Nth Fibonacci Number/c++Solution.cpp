class Solution {
  public:
    int nthFibonacci(int n){
        // code here
        int x, y;
        x = y = 1;
        
        const int mod = 1e9 + 7;
            
        for(int i = 3; i < n + 1; i++){
            x = (x + y) % mod;
            swap(x, y);
        }
        
        return y;
    }
};