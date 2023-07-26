//{ Driver Code Starts
    import java.util.*;
    class Heap_Sort
    {
        void printArray(int arr[],int n)
        {
            //int n = arr.length;
            for (int i=0; i<n; ++i)
                System.out.print(arr[i]+" ");
            System.out.println();
        }
        public static void main(String args[])
        {
            Scanner sc  = new Scanner(System.in);
            Heap_Sort hs = new Heap_Sort();
            int arr[] = new int[1000000];
            int T = sc.nextInt();
            while(T>0)
            {
                int n = sc.nextInt();
                for(int i=0;i<n;i++)
                    arr[i] = sc.nextInt();
                    
                Solution ob=new Solution();
                ob.heapSort(arr,n);
                hs.printArray(arr,n);
                T--;
            }
        }
        
    }
    
    
    
    // } Driver Code Ends
    
    
    class Solution
    {
        private void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        //Function to build a Heap from array.
        void buildHeap(int arr[], int n)
        {
            // Your code here
            // Start from the last non-leaf node and heapify all nodes in reverse order
            for (int i = n / 2 - 1; i >= 0; i--)
                heapify(arr, n, i);
        }
     
        //Heapify function to maintain heap property.
        void heapify(int arr[], int n, int i)
        {
            // Your code here
            int largest = i;
            int leftChild = 2 * i + 1;
            int rightChild = 2 * i + 2;
    
            // Compare the left child with the root
            if (leftChild < n && arr[leftChild] > arr[largest])
                largest = leftChild;
    
            // Compare the right child with the largest so far
            if (rightChild < n && arr[rightChild] > arr[largest])
                largest = rightChild;
    
            // If the largest element is not the root, swap them and recursively heapify the affected subtree.
            if (largest != i) {
                swap(arr, i, largest);
                heapify(arr, n, largest);
            }
        }
        
        //Function to sort an array using Heap Sort.
        public void heapSort(int arr[], int n)
        {
            //code here
            // Build a max heap
            buildHeap(arr, n);
    
            // Heap sort: swap elements and heapify
            for (int i = n - 1; i > 0; i--) {
                swap(arr, 0, i);    // Move current root to end
                heapify(arr, i, 0); // Heapify the reduced heap
            }
        }
     }
     