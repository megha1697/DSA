/**
 * Check if given 2 trees are identical or not
 * Time: O(n)
 * Space: O(n)
 */

class Node {
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function isSameTree(p,q){
    if(p === null && q=== null) return true;
    if(p === null || q=== null) return false;
    return ((p.data===q.data) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
}

const node = new Node(1);
    node.left = new Node(2);
    node.right = new Node(3);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    node.right.left = new Node(6);
    node.right.right= new Node(7);
const node1 = new Node(3);
    node1.left = new Node(2);
    node1.right = new Node(3);
    node1.left.left = new Node(4);
    node1.left.right = new Node(1);
    node1.right.left = new Node(6);
    node1.right.right= new Node(7);

console.log(isSameTree(node,node1))