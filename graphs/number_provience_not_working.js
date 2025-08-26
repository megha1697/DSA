// not working

/** 
 * Given an undirected graph with V vertices. Two vertices u and v belong to a single
 *  province if there is a path from u to v or v to u. Find the number of provinces. 
 * The graph is given as an n x n matrix adj where adj[i][j] = 1 if the ith city 
 * and the jth city are directly connected, and adj[i][j] = 0 otherwise.
 * A province is a group of directly or indirectly connected cities and 
 * no other cities outside of the group. 
*/

function dfs(node, adj, visited) {
    visited[node] = 1;
    console.log(adj[node]);
    for (let i of adj[node]) {
        if (!visited[i]) {
            visited[i] = 1;
        }
    }
}

function countProvience(adj) {
    let V = adj[0].length
    let adjList = new Array();
    let visited = new Array(V).fill(-1);
    let count = 0;
    for(let i=0;i<V;i++){
            adjList.push(new Array())
    }

    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (adj[i][j] === 1 && i != j) {
                adjList[i].push(j);
                adjList[j].push(i);
            }
        }
    }
    console.log(adjList);
    console.log(visited);
    for (let i = 0; i < V; i++) {
        console.log(i);
        if (visited[i] === -1) {
            console.log(i);
            
            count++;
            dfs(i, adjList, visited);
        }
    }
return count
}

// console.log(countProvience([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]));

// console.log(countProvience([ [1, 0, 1], [0, 1, 0], [1, 0, 1] ]));

console.log(countProvience([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]));