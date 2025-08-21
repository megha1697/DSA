/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 */
class Node {
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function bfs(root){
    let queue=[root]
    let res = []
    while(queue[0]){
        let qlen=queue.length
        let row=[]
        for(let i=0;i<qlen;i++){
            const curr = queue.shift()
            row.push(curr.data)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    res.push(row)
    }
    return res;
}

const node1 = new Node(1);
node1.left = new Node(2);
node1.right = new Node(3);
node1.left.left = new Node(4);
node1.left.right = new Node(5);
node1.right.left = new Node(6);
node1.right.right= new Node(7);
// node1.left.left.left.right.right = new Node(8);
console.log(bfs(node1))