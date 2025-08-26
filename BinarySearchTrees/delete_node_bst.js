class Node {
    constructor(data) {
        this.val=data;
        this.left=null;
        this.right=null;
    }
}

function deleteNode(root, val){
    if(root === null) return;
    let curr = root
    if(root.val === val){
        return helper(root)
    }
    
    while(root != null){
        if(root.val > val){
            if(root.left !== null && root.left.val === val){
            root.left = helper(root.left)
        } else {
            root = root.left
        }
        } else {
            if(root.right !==null && root.right.val === val){
                root.right = helper(root.right)
            } else {
                root=root.right
            }
        }
    }
    return curr
}

function helper(root){
    if(root.left === null){
        return root.right
    }
    if(root.right === null) return root.left
    let rightChild = root.right
    let lastleftRight = lastleftRightChild(root.left);
    lastleftRight.right=rightChild
    return root.left
}

function lastleftRightChild(node){
    if(node.right === null) return node
    return lastleftRightChild(node.right)
}

const node1 = new Node(9);
node1.left = new Node(8);
node1.right = new Node(12);
node1.right.left = new Node(10);
node1.right.right = new Node(13);
node1.left.left = new Node(5);
node1.left.left.left = new Node(3);
node1.left.left.right = new Node(7);
node1.left.left.right.left = new Node(6);
node1.left.left.right.right = new Node(8);
node1.left.left.left.left = new Node(2);
node1.left.left.left.right = new Node(4);
node1.left.left.left.left.left = new Node(1);
console.log(JSON.stringify(deleteNode(node1, 9)))