class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

function insertBeforeHead(head, node){
    node.next = head;
    node.prev=null;
    head.prev = node;
    head = node
    return head
}

let head1 = new ListNode(5);
head1.next = new ListNode(10);
head1.prev = head1

const node = new ListNode(2)
console.log(insertBeforeHead(head1, node))

function deleteHead(head){
    const newHead =head.next
    newHead.prev = null
    head.next = null
    return newHead
}

let head = new ListNode(5);
head.next = new ListNode(10);
head.prev = head
head.next.next = new ListNode(2);
head.next.prev = head.next;

console.log("Delete head from DDL : ",deleteHead(head))

function reverseDdl(head){
    let curr = head
    if(head === null || head.next === null) return head
    let prev = null
    
    while (curr !== null) {
        prev = curr.prev
        curr.prev = curr.next
        curr.next = prev
        curr = curr.prev
    }
    return prev.prev;
}

let headR = new ListNode(5);
headR.next = new ListNode(10);
headR.next.prev = headR
headR.next.next = new ListNode(2);
headR.next.next.prev = headR.next;

console.log("reverse head from DDL : ",reverseDdl(headR))