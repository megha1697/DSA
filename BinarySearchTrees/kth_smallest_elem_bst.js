/**
 * Given the root of a binary search tree, and an integer k,
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 */

class TreeNode {
    constructor(data) {
        this.val=data;
        this.left=null;
        this.right=null;
    }
}

var kthSmallest = function(root, k) {
    let res = []
    function inorder(root){
        if(root === null) return;
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res[k-1];
};

const node1 = new TreeNode(3);
node1.left = new TreeNode(1);
node1.right = new TreeNode(4);
node1.left.right = new TreeNode(2);

console.log(kthSmallest(node1,1))