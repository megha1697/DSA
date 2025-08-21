/**
 * Diameter of any node is left height + right height
 * find the height of each node and maintain avariable to trace the maximum diameter
 */

/** Time: O(n)
 * Space: O(n)
*/
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right= null
    }
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.right.left = new Node(4);
node.right.right = new Node(6);

node.right.right = new Node(6);

function findDiameter(){
let maxi=0;
console.log(node);
function findHeight(node){
    if (node === null) return 0;
    let lh = findHeight(node.left);
    let rh = findHeight(node.right);
    maxi = Math.max(maxi, lh+rh);
    // console.log(maxi);
    return 1 + Math.max(lh,rh)
}
findHeight(node)
return maxi
}

console.log(findDiameter())