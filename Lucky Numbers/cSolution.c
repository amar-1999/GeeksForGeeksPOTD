//User function Template for C

// Complete the function
// n: Input n
// Return true if the given number is a lucky number else return False

bool isLucky(int n) {
    // code here
    int x = 2;

    while (x <= n) {
        if (n % x == 0)
            return false;

        n -= n / x;
        ++x;
    }

    return true;
}