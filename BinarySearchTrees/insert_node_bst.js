class Node {
    constructor(data) {
        this.val=data;
        this.left=null;
        this.right=null;
    }
}

function insert(node, val){
    if(node === null) return new Node(val)
    let curr =node
    while(true){
        if(curr.val <=val){
            if(curr.right != null ) curr = curr.right
            else {
                curr.right = new Node(val)
                break;
            }
        } else {
            if(curr.left !== null) curr=curr.left
            else {
                curr.left = new Node(val)
                break;
            }
        }
    }
    return node
}


const node1 = new Node(10);
node1.left = new Node(5);
node1.right = new Node(15);
node1.left.left = new Node(2);
node1.left.right = new Node(6);
console.log(insert(node1, 13))