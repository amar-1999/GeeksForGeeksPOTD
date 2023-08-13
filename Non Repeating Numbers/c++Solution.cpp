class Solution
{
public:
    vector<int> singleNumber(vector<int> nums) 
    {
        // Code here.
        int xor_result = 0;
        
        // Calculate XOR of all numbers in the array
        for (int num : nums) {
            xor_result ^= num;
        }
        
        // Find the rightmost set bit in xor_result
        int rightmost_set_bit = xor_result & -xor_result;
        
        // Initialize two distinct numbers
        int num1 = 0, num2 = 0;
        
        // Separate numbers into two groups based on the rightmost set bit
        for (int num : nums) {
            if (num & rightmost_set_bit) {
                num1 ^= num;
            } else {
                num2 ^= num;
            }
        }
        
        return {min(num1, num2), max(num1, num2)};
    }
};