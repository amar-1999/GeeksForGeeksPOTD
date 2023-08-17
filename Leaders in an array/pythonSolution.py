class Solution:
    #Back-end complete function Template for Python 3
    
    #Function to find the leaders in the array.
    def leaders(self, A, N):
        #Code here
        leaders_list = []
        max_right = A[N - 1]  # The rightmost element is always a leader
        leaders_list.append(max_right)

        # Traverse the array from right to left
        for i in range(N - 2, -1, -1):
            if A[i] >= max_right:
                max_right = A[i]
                leaders_list.append(max_right)

        # Reverse the list to maintain the order of appearance
        leaders_list.reverse()
        return leaders_list


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


    
def main():
    
    T=int(input())
    
    while(T>0):
        
        
        N=int(input())
        
        A=[int(x) for x in input().strip().split()]
        obj = Solution()
        
        A=obj.leaders(A,N)
        
        for i in A:
            print(i,end=" ")
        print()
        
        T-=1

if __name__=="__main__":
    main()
# } Driver Code Ends