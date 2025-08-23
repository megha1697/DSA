/**
 * Given the head of a doubly linked list with its values sorted in non-decreasing order. 
 * Remove all duplicate occurrences of any value in the list so that only 
 * distinct values are present in the list. Return the head of the modified linked list.
 * 
 * Time: O(n)
 * Space: O(1)
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

function removeDups(head) {
    let temp = head;
    while (temp != null && temp.next !== null) {
        let nextNode = temp.next
        while (nextNode !== null && temp.val === nextNode.val) {
            nextNode = nextNode.next
        }
        temp.next = nextNode
        if (nextNode) nextNode.prev = temp
        temp = temp.next
    }
    return head;
}

let head1 = new ListNode(2);
head1.next = new ListNode(2);
head1.next.prev = head1;
head1.next.next = new ListNode(2);
head1.next.next.prev = head1.next;
head1.next.next.next = new ListNode(4);
head1.next.next.next.prev = head1.next.next;
head1.next.next.next.next = new ListNode(4);
head1.next.next.next.next.prev = head1.next.next.next;
console.log(removeDups(head1));
