#User function Template for python3

class Solution:
    def maxOnes(self, a, n):
        # Your code goes here
        o = 0
        for x in a:
            if x == 1:
                o += 1
        
        z = 0
        mx = 0
        for i in range(n):
            if a[i] == 0:
                z += 1
            else:
                if z >= 1:
                    z -= 1
            mx = max(mx, z)
        
        return mx + o


#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        ob=Solution()
        print(ob.maxOnes(a, n))

        T -= 1


if __name__ == "__main__":
    main()



# } Driver Code Ends