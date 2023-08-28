//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < n; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let obj = new Solution();
        let res = obj.compute(head1);
        printlist(res);
    }
}



// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {

    compute(head) {
        //your code here
        if (!head || !head.next) {
            return head;
        }

        // Reverse the linked list
        let prev = null;
        let current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;

        let max_value = head.data;
        let temp = head;

        // Traverse to remove nodes
        while (temp && temp.next) {
            if (temp.next.data < max_value) {
                temp.next = temp.next.next;
            } else {
                max_value = temp.next.data;
                temp = temp.next;
            }
        }

        // Reverse the modified linked list again
        prev = null;
        current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;

        return head;
    }
}