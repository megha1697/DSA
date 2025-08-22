class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0)
    let prev = dummy
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        }
        else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    if (l1 !== null) prev.next = l1
    if (l2 !== null) prev.next = l2
    return dummy.next;
}
function mergeKLists(lists) {
    if (lists.length === 0) return null;
    let n = lists.length;
    while (n > 1) {
        let mergedList = []
        for (let i = 0; i < n; i + 2) {
            let l1 = lists[i]
            let l2 = ((i + 1) < n) ? lists[i + 1] : null
            mergedList.push(mergeTwoLists(l1, l2))
        }
        lists = mergedList
    }
    return lists[0];
};

// First linked list: 5 -> 10 -> 1
let head1 = new ListNode(5);
head1.next = new ListNode(10);
head1.next.next = new ListNode(15);

// Second linked list: 2 -> 3 -> 20
let head2 = new ListNode(2);
head2.next = new ListNode(3);
head2.next.next = new ListNode(20);
console.log(mergeKLists([head1, head2]))
