//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        if (arr[i] === -0)
            arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_line = readLine().split(" ").map((x) => parseInt(x));
        for (let j = 0; j < n; j++) arr[j] = input_line[j];
        let obj = new Solution();
        obj.heapSort(arr, n);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 *
 * heapify
 * @param {number[]} arr
 * @param {number} n
 * @param {number} i
 *
 * buildHeap
 * @param {number[]} arr
 * @param {number} n 
 * 
 * heapSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    // Function to swap the position of two elements
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    //Heapify function to maintain heap property.
    heapify(arr, n, i) {
        //code here
        let largest = i;
        const leftChild = 2 * i + 1;
        const rightChild = 2 * i + 2;

        // Compare the left child with the root
        if (leftChild < n && arr[leftChild] > arr[largest])
            largest = leftChild;

        // Compare the right child with the largest so far
        if (rightChild < n && arr[rightChild] > arr[largest])
            largest = rightChild;

        // If the largest element is not the root, swap them and recursively heapify the affected subtree.
        if (largest !== i) {
            this.swap(arr, i, largest);
            this.heapify(arr, n, largest);
        }
    }

    //Function to build a Heap from array.
    buildHeap(arr, n) {
        //code here
        // Start from the last non-leaf node and heapify all nodes in reverse order
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
            this.heapify(arr, n, i);
    }

    //Function to sort an array using Heap Sort.
    heapSort(arr, n) {
        //code here
        // Build a max heap
        this.buildHeap(arr, n);

        // Heap sort: swap elements and heapify
        for (let i = n - 1; i > 0; i--) {
            this.swap(arr, 0, i);    // Move current root to end
            this.heapify(arr, i, 0); // Heapify the reduced heap
        }

    }

}