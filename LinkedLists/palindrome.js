/**Given the head of a singly linked list representing a positive integer number.
 * Each node of the linked list represents a digit of the number, with the 1st node containing 
 * the leftmost digit of the number and so on. Check whether the linked list values form a 
 * palindrome or not. Return true if it forms a palindrome, otherwise, return false.
A palindrome is a sequence that reads the same forward and backwards. */


/** Brute force put the values in stack and compaire the linked list wwith data in stack */

/** find middle, 
 * reverse 2nd half of linked list , 
 * compare 1st half and 2nd half, 
 * reverse the 2nd half */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function middle(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.next;
}

function reverseLL(head) {
    if(head === null || head.next===null) return head;
    let temp = head;
    let prev =null;
    while (temp != null) {
        front = temp.next;
        temp.next = prev;
        prev = temp
        temp = front
    }
    return prev;
}

function checkPalindrome(head) {
    if (head === null || head.next === null) return true
    let middleNode = middle(head);
    let newHead = reverseLL(middleNode);
    let curr1 = head
    let cur = newHead;
    console.log(cur);
    
    while (cur !== null) {
        if (curr1.val !== cur.val) { 
            reverseLL(newHead);
            return false }
        curr1 = curr1.next
        cur = cur.next
    }
    reverseLL(newHead);
    return true
}

let headR = new ListNode(5);
headR.next = new ListNode(15);
headR.next.next = new ListNode(15);
headR.next.next.next = new ListNode(5);

console.log(checkPalindrome(headR));
