//User function Template for C++
class Solution
{
    public:
    int gcd(int a, int b) {
        return (b == 0) ? a : gcd(b, a % b);
    }
    int countFractions(int n, int numerator[], int denominator[])
    {
        unordered_map<string, int> fractionCount;
        int totalCount = 0;

        for (int i = 0; i < n; i++) {
            int num = numerator[i];
            int den = denominator[i];
            int divisor = gcd(num, den);
    
            num /= divisor;
            den /= divisor;
    
            string key = to_string(num) + "/" + to_string(den);
    
            if (fractionCount.find(key) != fractionCount.end()) {
                totalCount += fractionCount[key];
            }
    
            int complementNum = den - num;
            int complementDen = den;
    
            int complementDivisor = gcd(complementNum, complementDen);
    
            complementNum /= complementDivisor;
            complementDen /= complementDivisor;
    
            string complementKey = to_string(complementNum) + "/" + to_string(complementDen);
    
            fractionCount[complementKey]++;
        }
    
        return totalCount;   
    }
};