//{ Driver Code Starts
#include<bits/stdc++.h>

using namespace std;

struct Node
{
    int data;
    Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};


void print(Node *root)
{
    Node *temp = root;
    while(temp!=NULL)
    {
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}



// } Driver Code Ends
/*

The structure of linked list is the following

struct Node
{
    int data;
    Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};
*/
class Solution
{
    public:
    Node *compute(Node *head)
    {
        if (!head || !head->next) {
            return head;
        }
        
        // Reverse the linked list
        Node *prev = nullptr;
        Node *current = head;
        while (current) {
            Node *next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        head = prev;

        int max_value = head->data;
        Node *temp = head;
        
        // Traverse to remove nodes
        while (temp && temp->next) {
            if (temp->next->data < max_value) {
                temp->next = temp->next->next;
            } else {
                max_value = temp->next->data;
                temp = temp->next;
            }
        }

        // Reverse the modified linked list again
        prev = nullptr;
        current = head;
        while (current) {
            Node *next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        head = prev;

        return head;
        // your code goes here
    }
    
};
   


//{ Driver Code Starts.

int main()
{
    int T;
	cin>>T;

	while(T--)
	{
		int K;
		cin>>K;
		struct Node *head = NULL;
        struct Node *temp = head;

		for(int i=0;i<K;i++){
		    int data;
		    cin>>data;
			if(head==NULL)
			    head=temp=new Node(data);
			else
			{
				temp->next = new Node(data);
				temp = temp->next;
			}
		}
        Solution ob;
        Node *result = ob.compute(head);
        print(result);
        cout<<endl;
    }
}

// } Driver Code Ends