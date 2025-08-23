/** If you start and reach back to the same node then there is a loop.*/


/** Use map to store the visits of each node, check if the node is visited by checking
if the entry exists in map. It exists return

Time : o(n 2 logn)
space : o(n)
*/
class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
function loop(head){
    let temp = head;
    let map = new Map();
    while(temp!=null){
        if(map.has(temp)){
            return true
        }
        map[temp] =1
        temp=temp.next
    }
}

/** Tortoise and Hare : Floyd cycle finding algorithm*/

function loop1(head){
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            return true
        }
    }
    return false
}

let head1 = new ListNode(1);
head1.next = new ListNode(3);
head1.next.next = new ListNode(4);

// Create a loop
// head1.next.next.next = head1.next;

console.log(loop1(head1));

let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(4);

// Create a loop
head.next.next.next = head.next;

console.log(loop1(head));


function loopLength(head){
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            return findLength(slow, fast);
        }
    }
    return 0
}

function findLength(slow, fast){
    fast=fast.next;
    let cnt=1;
    while(slow != fast){
        cnt ++;
        fast = fast.next;
    }
    return cnt;
}

let head3 = new ListNode(1);
head3.next = new ListNode(3);
head3.next.next = new ListNode(4);
head3.next.next.next = new ListNode(5);
head3.next.next.next.next = new ListNode(6);
head3.next.next.next.next.next = new ListNode(7);

// Create a loop
head3.next.next.next.next.next = head3;

console.log("loop length",loopLength(head3));
