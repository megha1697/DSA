/** Search if an element exists in the BST */
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function traceTree(root){
    if (root === null) return
    let queue = [root]
    let res=[]
    while(queue.length){
        const currNode = queue.shift()
        res.push(currNode.data)
        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
    }
    return res
}
function searchBST(root, val) {
    if(root === null) return false;
    if( root.data === val) {
        return true
    }
   return (root.data<val) ? searchBST(root.right, val) :  searchBST(root.left, val)
};

function searchIterative(root, val){
    while(root !== null && root.data !==val){
        root = root.data>val ? root.left : root.right
    }
    return traceTree(root)
    // return root
}

// function 

const node1 = new Node(4);
node1.left = new Node(2);
node1.right = new Node(7);
node1.left.left = new Node(1);
node1.left.right = new Node(3);
console.log(searchBST(node1, 2))

const node = new Node(4);
node.left = new Node(2);
node.right = new Node(7);
node.left.left = new Node(1);
node.left.right = new Node(3);
console.log(searchIterative(node, 2))