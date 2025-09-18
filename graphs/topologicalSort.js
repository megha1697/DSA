/** Topological Sort or Kahn's algorithm
 * 
 * Given a Directed Acyclic Graph (DAG) with V vertices labeled from 0 to V-1.
 * The graph is represented using an adjacency list where adj[i] lists all nodes 
 * connected to node. Find any Topological Sorting of that Graph.
 * In topological sorting, node u will always appear before node v if there is
 * a directed edge from node u towards node v(u -> v).

 * The Output will be True if your topological sort is correct otherwise it will be False.
 * TIme: O(v+e)
 * Space: O(n)
 */

function dfs(node, visited, stack, adj) {
    visited[node] = 1;
    for(let i of adj[node]){
        if(visited[i]=== -1){
            dfs(i,visited,stack,adj)
        }
    }
    stack.push(node);
}
function matToList(adj){
    for(let i=0;i<adj.length;i++){
        for (let j=0;j<adj[0].length;j++){
            adj
        }
    }
}
function topologicalSort(v, adj) {
    let visited = new Array(v).fill(-1);
    let stack=[];
    for(let i=0;i<v;i++) {
        if(visited[i] === -1) {    
            dfs(i,visited,stack,adj)
        }
    }
    
    let ans=[];
    while(stack.length){
        ans.push(stack.pop());
    }
    return ans;
}

console.log(topologicalSort(6, [ [ ], [ ], [3], [1], [0,1], [0,2] ]));
console.log(topologicalSort(4, [ [ ], [0], [0], [0] ]));
