

//User function Template for Java



class Solution
{
    // Complete the function
    // n: Input n
    // Return True if the given number is a lucky number else return False
    public static boolean isLucky(int n)
    {
        // Your code here
         if (n <= 0) {
            return false;
        }

        int x = 2;

        while (x <= n) {
            if (n % x == 0) {
                return false;
            }

            n -= n / x;
            ++x;
        }

        return true;
    }
}