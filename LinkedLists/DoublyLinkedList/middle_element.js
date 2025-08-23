/**
 * Tortoise and hare
 * person1 takes 1 step and person2 takes 2steps then person 1 
 * will cover half the distance that person2 has covered
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow= slow.next;
        fast = fast.next.next
    }
    return slow
}

let headR = new ListNode(5);
headR.next = new ListNode(10);
headR.next.prev = headR
headR.next.next = new ListNode(2);
headR.next.next.prev = headR.next;

console.log("Odd length list middle elem : ",findMiddle(headR))

let head = new ListNode(5);
head.next = new ListNode(10);
head.next.prev = head
head.next.next = new ListNode(2);
head.next.next.prev = head.next;
head.next.next.next = new ListNode(3);
head.next.next.next.prev = head.next.next;

console.log("Even length list middle elem : ",findMiddle(head))