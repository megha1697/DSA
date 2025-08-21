/** Height of the binary tree */
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
function maxDepth(node){
    if(node === null) return 0
    let left = maxDepth(node.left)
    let right = maxDepth(node.right)
    return 1+ Math.max(left, right)
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right.right = new Node(6);
node.right.right.right = new Node(8);
console.log(maxDepth(node))

const node1 = new Node(1);
node1.left = new Node(2);
node1.right = new Node(3);
node1.left.left = new Node(4);
node1.left.left.left = new Node(5);
node1.left.left.left.right = new Node(6);
node1.left.left.left.right.right = new Node(8);
console.log(maxDepth(node1))