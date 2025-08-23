/** 
 * Given the head of a sorted doubly linked list of positive distinct integers,
 *  and a target integer, return a 2D array containing all unique pairs of nodes (a, b) such that
 *  a + b == target. Each pair should be returned as a 2-element array [a, b] with a < b.
 *  The list is sorted in ascending order. If there are no such pairs, return an empty list.
*/
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

function pairSum(head,sum) {
    let temp1=head;
    let res = [];
    while(temp1 !== null){
        let temp2 = temp1.next
        while(temp2 !== null){
            if(temp1.val+temp2.val === sum){
                res.push([temp1.val, temp2.val])
            }
            temp2 = temp2.next;
        }
        temp1=temp1.next;
    }
    return res;
}

let head = new ListNode(10);
head.next = new ListNode(0);
head.next.prev = head
head.next.next = new ListNode(9);
head.next.next.prev = head.next;
head.next.next.next = new ListNode(10);
head.next.next.next.prev = head.next.next;
console.log(pairSum(head, 10));

function pairSum2pointer(head,sum) {
    let left=head;
    let right =head;
    let res=[];
    while(right.next !=null) { right=right.next }
    while(left.val < right.val){
        if(left.val+right.val === sum) {
            res.push([left.val, right.val])
            left=left.next;
            right=right.prev;
        } else if(left.val+right.val<sum) left=left.next
        else right=right.prev
    }
    return res;
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.prev = head1;
head1.next.next = new ListNode(3);
head1.next.next.prev = head1.next;
head1.next.next.next = new ListNode(4);
head1.next.next.next.prev = head1.next.next;
head1.next.next.next.next = new ListNode(5);
head1.next.next.next.next.prev = head1.next.next.next;
console.log(pairSum2pointer(head1,5));
