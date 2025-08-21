/** 
 * Time: O(n)
 * Space:O(n)
 */

class Node {
    constructor(v){
        this.data = v;
        this.left =null;
        this.right = null;
    }
}

function inorder(node) {
    if(node === null){
        return
    }
    inorder(node.left)
    console.log(node.data)
    inorder(node.right)
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
inorder(root)

function preorder(node){
    if(node === null){
        return
    }
    console.log(node.data)
    preorder(node.left)
    preorder(node.right)
}
const rootPre = new Node(1);
rootPre.left = new Node(2);
rootPre.right = new Node(3);
rootPre.left.left = new Node(4);
rootPre.left.right = new Node(5);
rootPre.right.right = new Node(6);
console.log('Preorder');
preorder(rootPre)

function postOrder(node){
    if(node === null){
        return
    }
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.data);
}
console.log("Postorder");
const rootPost = new Node(1);
rootPost.left = new Node(2);
rootPost.right = new Node(3);
rootPost.left.left = new Node(4);
rootPost.left.right = new Node(5);
rootPost.right.right = new Node(6);
postOrder(rootPost)

function levelOrder(node) {
    if(node === null) return
    const queue = [root]
    while(queue.length>0){
        const currNode = queue.shift()
        console.log(currNode.data);
        if(currNode.left){
            queue.push(currNode.left)
        }
        if(currNode.right){
            queue.push(currNode.right)
        }
    }
}

console.log("BFS : Level order");
const rootbfs = new Node(1);
rootbfs.left = new Node(2);
rootbfs.right = new Node(3);
rootbfs.left.left = new Node(4);
rootbfs.left.right = new Node(5);
rootbfs.right.right = new Node(6);
levelOrder(rootbfs)

