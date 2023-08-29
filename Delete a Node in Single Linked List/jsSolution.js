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

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
function printList(head) {
    let s = "";
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let x = parseInt(readLine());

        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.deleteNode(head, x);
        printList(res);
    }

}
// } Driver Code Ends


//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
 * @return {Node}
*/

class Solution {
    deleteNode(head, x) {
        //code here
        if (!head) {
            return null; // Empty list, nothing to delete
        }

        if (x === 1) {
            return head.next; // Delete the first node
        }

        let prev = null;
        let curr = head;
        let count = 1;

        while (curr !== null && count < x) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        if (curr === null) {
            return head; // Node at position x doesn't exist
        }

        prev.next = curr.next; // Delete the node at position x

        return head;
    }
}
