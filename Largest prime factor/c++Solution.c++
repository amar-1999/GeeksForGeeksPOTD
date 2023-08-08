class Solution{
public: 
    long long int largestPrimeFactor(int N){
        // code here
         long long int largest_prime = 2;

        while (N % 2 == 0) {
            N /= 2;
        }

        int current_factor = 3;
        while (current_factor * current_factor <= N) {
            while (N % current_factor == 0) {
                largest_prime = current_factor;
                N /= current_factor;
            }
            current_factor += 2;
        }

        if (N > 1) {
            largest_prime = N;
        }

        return largest_prime;
    }
};