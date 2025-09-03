/** Given the root of a binary tree, the level of its root is 1, the level of its 
 * children is 2, and so on. Return the smallest level x such that the sum of all 
 * the values of nodes at level x is maximal. */

class Node{
    constructor(data){
        this.val=data;
        this.left=null;
        this.right=null;
    }
}

function maxLevelSum(root) {
    let queue=[root];
    let maxLevel = 1
    let currentLevel =1
    let maxSum= Number.MIN_SAFE_INTEGER;
    while(queue[0]){
        let qlen = queue.length;
        let rowSum = 0;
        for(let i=0;i<qlen;i++){
            let curr = queue.shift();
            rowSum+=curr.val;
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        if(rowSum>maxSum) {
            maxSum =rowSum;
            maxLevel=currentLevel;
        }
    currentLevel++;
    }
    return maxLevel;
};

const node = new Node(1);
node.left = new Node(7);
node.right = new Node(0);
node.left.left = new Node(7);
node.left.right = new Node(-8);

console.log(maxLevelSum(node));
