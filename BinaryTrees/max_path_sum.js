/**
 * max path = val + maxvalLeft+ maxvalRight
 */

class Node {
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function main(){
    let sum=0
    const node1 = new Node(1);
    node1.left = new Node(2);
    node1.right = new Node(3);
    node1.left.left = new Node(4);
    node1.left.right = new Node(5);
    node1.right.left = new Node(6);
    node1.right.right= new Node(7);

    const node = new Node(15);
    node.left = new Node(10);
    node.right = new Node(20);

    node.right.left = new Node(-30);
    node.right.right= new Node(-15);
    function maxPath(node) {
        if(node === null) return 0
        let leftSum = maxPath(node.left)
        let rightSum = maxPath(node.right)
        sum = Math.max(sum, leftSum+rightSum+node.data);
        return node.data+ Math.max(leftSum, rightSum)
    }
    maxPath(node1)
    maxPath(node)
    return sum
}
console.log(main());
