/**
 * Given a Directed Acyclic Graph of N vertices from 0 to N-1 and M edges and a 2D Integer array 
 * edges, where there is a directed edge from vertex edge[i][0] to vertex edge[i][1] with a 
 * distance of edge[i][2] for all i.
 * Find the shortest path from source vertex to all the vertices and if it is impossible to reach any 
 * vertex, then return -1 for that vertex. The source vertex is assumed to be 0. 
*/

function shortestPathDAG(n,m, edges) {
    let adjList = new Array(n)
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    for (let it of edges) {
        adjList[it[0]].push(it[1])
        adjList[it[1]].push(it[0])
    }

    let q = []

}