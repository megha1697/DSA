/** Given an undirected graph with V vertices labeled from 0 to V-1. 
 * The graph is represented using an adjacency list where adj[i] lists all nodes 
 * connected to node. Determine if the graph contains any cycles.
Note: The graph does not contain any self-edges (edges where a vertex is connected 
to itself). */

function detectLoop(src, adj, visited){
    visited[src]=1;
    let queue = [];
    queue.push([src,-1])
    while(queue.length){
        let elem = queue.shift()
        let node = elem[0];
        let parent = elem[1];
        for(let item of adj[node]){
            if(!visited[item]){
                visited[item] =1;
                queue.push([item,node])
            } else if(parent != item){
                return true;
            }
        }
    }
    return false;
}
function isCycle(V,adj){
    let visited = new Array(V).fill(0);
    for(let i=0;i<V;i++) {
        if(!visited[i]){
            if(detectLoop(i, adj, visited)) return true
        }
    }
    return false
}

console.log(isCycle(6, [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]));
console.log(isCycle(4, [[1, 2], [0], [0, 3], [2]]));
