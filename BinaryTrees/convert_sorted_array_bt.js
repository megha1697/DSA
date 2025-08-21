/** 
 * To convert a sorted array to a height-balanced BST, pick the middle element as root to ensure balance.
 * Then recursively do the same for the left and right halves of the array to form left and right subtrees.
 * 
 * Approach:::
 * Pick the middle element of the current subarray as the root node.
 * Recursively build the left subtree with the left half.
 * Recursively build the right subtree with the right half.
 * Base case: when start == end, return null.
 * 
 * Time Complexity: O(n) — each node is created once
 * Space Complexity: O(logn) — recursion stack for balanced tree
 */
class TreeNode {
    constructor(data) {
        this.val=data;
        this.left=null;
        this.right=null;
    }
}
function sortedArrayToBST(nums) {
    function build(start, end){
        if(start === end) return null;
        const mid = Math.floor((start+end)/2);
        const node =new TreeNode(nums[mid])
        node.left = build(start, mid)
        node.right = build(mid+1, end)
        return node
    }
    return build(0, nums.length)
};

console.log(sortedArrayToBST([1,2,3,4,5]));
