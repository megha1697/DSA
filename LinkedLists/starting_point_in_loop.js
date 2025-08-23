/** 
 * Given the head of a singly linked list, the task is to find the starting point of a loop in
 *  the linked list if it exists. Return the starting node if a loop exists; otherwise, return
 *  null.A loop exists in a linked list if some node in the list can be reached again by 
 * continuously following the next pointer. Internally, pos denotes the index (0-based) of
 * the node from where the loop starts.
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
function beginloop(head){
    let slow = head;
    let fast = head;
    let cnt=1;
    while(fast !== null && fast.next !== null) {
        slow =slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return slow.next.val;
        }
    }
    return null
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log("Loop does not exists: ",beginloop(head1))

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Create a loop
head.next.next.next.next = head.next;

console.log("Starting point of a loop: ",beginloop(head))


let head2 = new ListNode(6);
head2.next = new ListNode(3);
head2.next.next = new ListNode(7);

head2.next.next = head2.next;

console.log("Starting point of a loop: ",beginloop(head2))

