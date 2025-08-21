/**
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

function balancedTree(node){
    if(node === null) return true
    let lefth=findHeight(node.left)
    let righth=findHeight(node.right)

    if(Math.abs(lefth-righth)>1){
        return false
    }
    
    let checkLeft = balancedTree(node.left)
    let checkright = balancedTree(node.right)

    if(!checkLeft || !checkright) return false

    return true
}

function findHeight(node) {
    if(node === null) return 0
    let lefth = findHeight(node.left);
    let righth = findHeight(node.right);
    return 1+Math.max(lefth, righth);
}

const node1 = new Node(1);
node1.left = new Node(2);
node1.right = new Node(3);
node1.left.left = new Node(4);
node1.left.left.left = new Node(5);
node1.left.left.left.right = new Node(6);
node1.left.left.left.right.right = new Node(8);
console.log(balancedTree(node1))

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.left.right = new Node(5);
node.left.right = new Node(6);
node.left.right.right = new Node(8);
console.log(balancedTree(node))

const node2 = new Node(1);
node2.left = new Node(2);
node2.right = new Node(3);
node2.left.left = new Node(4);
node2.left.right = new Node(6);
node2.right.right = new Node(8);
console.log(balancedTree(node2))