function dfs(node, adj, visited, list) {
    visited[node] = 1;
    list.push(node)
    for(let elem of adj[node]){
        if(!visited[elem]){
            dfs(elem, adj, visited, list);
        }
    }
}

function dfsOfGraph(adj) {
    let list= [];
    let visited = new Array(adj.length).fill(0)
    dfs(0, adj, visited, list)
    return list
}

let adj =
    [[1, 2], [0, 2, 3], [0, 4], [1, 4], [2, 3]];
console.log("Depth first search: ",dfsOfGraph(adj));