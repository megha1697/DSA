/**
 * Given the head of a singly linked list and an integer n. Remove the nth node from the back 
 * of the linked List and return the head of the modified list. The value of n will always be less 
 * than or equal to the number of nodes in the linked list. 
 * 
 * Move the fast pointer n times and then start a slow pointer from head. Now move slow and 
 * fast together, As fast reachs the last node the slow.next is going to be the node that needs
 * to be deleted
*/


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function removeNthNodeBack(head,n){
    let fast=head;
    let slow=head;
    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    if(fast === null) return head.next;
    while(fast.next !== null) {
        fast = fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return head;
}

let headR = new ListNode(5);
headR.next = new ListNode(1);
headR.next.next = new ListNode(15);
headR.next.next.next = new ListNode(5);
headR.next.next.next.next = new ListNode(2);
console.log(removeNthNodeBack(headR, 5));
