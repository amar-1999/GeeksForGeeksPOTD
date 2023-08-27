//User function template for C++
class Solution{
public:	
	
	
	int isPalindrome(string S)
	{
	    // Your code goes here
	    int left = 0;                // Initialize left pointer
        int right = S.length() - 1;  // Initialize right pointer

        while (left < right) {
            if (S[left] != S[right]) {
                return 0;  // If characters at current positions don't match, it's not a palindrome
            }
            left++;        // Move left pointer to the right
            right--;       // Move right pointer to the left
        }

        return 1; 
	}

};