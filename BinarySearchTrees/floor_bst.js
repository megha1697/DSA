/** Find the nearnest or equal value to the given key
 * Problem Statement: Given a Binary Search Tree and a key, return the ceiling of the given key in the Binary Search Tree.
Ceiling of a value refers to the value of the smallest node in the Binary Search Tree that is greater than or equal to the given key.
If the ceiling node does not exist, return nullptr.
 * Time: O(log2n)
 * Space: O(1)
 */

class Node {
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function ceil(node, key){
    let ceil = -1
    while(node){
        if(node.data === key){
            ceil = node.data
            return ceil
        }
        if(key<node.data){
            node = node.left
        } else {
            ceil = node.data
            node = node.right
        }
    }
    return ceil
}

const node1 = new Node(10);
node1.left = new Node(5);
node1.right = new Node(15);
node1.left.left = new Node(2);
node1.left.right = new Node(6);
console.log(ceil(node1, 7))
