/** Given the head of a doubly linked list and an integer target. Delete all nodes in the 
 * linked list with the value target and return the head of the modified linked list. */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

function deleteAllKeys(head, key){
    let temp = head;
    while(temp != null) {
        if(temp.val === key){
            if(temp === head){
                head= temp.next
            }
            let nextNode = temp.next;
            let prevNode = temp.prev;
            if(nextNode!==null) nextNode.prev = prevNode
            if(prevNode!==null) prevNode.next = nextNode
            temp=nextNode
        } else {
            temp=temp.next;
        }
    }
    return head;
}

let head = new ListNode(10);
head.next = new ListNode(0);
head.next.prev = head
head.next.next = new ListNode(9);
head.next.next.prev = head.next;
head.next.next.next = new ListNode(10);
head.next.next.next.prev = head.next.next;

console.log(deleteAllKeys(head, 10));
