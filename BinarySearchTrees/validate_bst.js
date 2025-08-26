/**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

var isValidBST = function(root) {
    return isValidBinaryST(root, -2147483649, 2147483648)
};

function isValidBinaryST(root, min, max){
    if(root === null) return true
    if(root.val<=min || root.val>=max) {
        return false
    }
    return isValidBinaryST(root.left, min, root.val) && isValidBinaryST(root.right, root.val, max)
}