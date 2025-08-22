class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function searchKey(head, key) {
    // Your code goes here
    let flag = false;
    while (head) {
        if (head.val === key) {
            flag = true;
            break;
        }
        head = head.next
    }
    return flag
}

let head1 = new ListNode(5);
head1.next = new ListNode(10);
head1.next.next = new ListNode(15);
head1.next.next.next = new ListNode(2);

console.log("Search key exists in linked list: ",searchKey(head1, 21));

function deleteKey(head, key) {
    let ll = head;
    let prev = head;
    head = head.next;
    while (head) {
        if (head.val === key) {
            prev.next=head.next
        }
        prev = head;
        head=head.next
    }
    return ll
}

let head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(15);
head.next.next.next = new ListNode(2);

console.log("Delete key from linked list: ",deleteKey(head, 10));
