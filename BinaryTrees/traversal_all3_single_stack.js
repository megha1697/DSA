/**
 * In this approach we are trying to traverse the tree in all DFS ways using a single stack
 */
/**
 * Time: O(3N)
 * Space: O(4N)
 */
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

function traversal(node){
    let stack=[]
    stack.push([node,1]);
    console.log('stack', stack);
    
    let obj={pre: [], post:[], in:[]}
    if(node === null) { return}
    while(stack.length>0){
        const it = stack.pop();
        const curNode = it[0]
        console.log('it', it[0]);
        
        if(it[1] === 1){
            obj.pre.push(curNode.data)
            it[1] = it[1]+1
            stack.push(it)

            if(curNode.left !== null){
                stack.push([curNode.left, 1])
            }
        }
        else if(it[1] === 2){
            obj.in.push(curNode.data)
            it[1] = it[1]+1
            stack.push(it)
            if(curNode.right !== null){
                stack.push([curNode.right, 1])
            }
        } else {
            obj.post.push(curNode.data)
        }
    }
    return obj
}

const rootAll = new Node(1);
rootAll.left = new Node(2);
rootAll.right = new Node(3);
rootAll.left.left = new Node(4);
rootAll.left.right = new Node(5);
rootAll.right.right = new Node(6);
console.log(traversal(rootAll))
