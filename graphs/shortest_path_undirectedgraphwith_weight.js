// Shortest path in undirected graph with unit weights
/**
 * Given a Undirected Graph of N vertices from 0 to N-1 and M edges and a 2D Integer array edges, 
 * where there is a edge from vertex edges[i][0] to vertex edges[i][1] of unit weight.
Find the shortest path from the source to all other nodes in this graph. In this problem statement,
we have assumed the source vertex to be ‘0’. If a vertex is unreachable from the source node, 
then return -1 for that vertex.
 */

function shortestPath(edges, src, n, m) {
    let adjList = new Array(n)
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    for (let it of edges) {
        adjList[it[0]].push(it[1])
        adjList[it[1]].push(it[0])
    }
    let dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dist[src]=0;
    let q=[]
    q.push(src)
    while(q.length){
        let node = q.shift();
        for(let it of adjList[node]){
            if(dist[node]+1 <dist[it]){
                dist[it]=1+dist[node]
                q.push(it);
            }
        }
    }
    let ans = new Array(n).fill(-1);
    for(let i=0;i<n;i++){
        if(dist[i]!=Number.MAX_SAFE_INTEGER){
            ans[i] = dist[i];
        }
    }
    return ans;
}

console.log(shortestPath([[0,1],[0,3],[3,4],[4,5],[5, 6],[1,2],[2,6],[6,7],[7,8],[6,8]],0, 9,10));


console.log(shortestPath([[1,0],[2,1],[0,3],[3,7],[3,4],[7,4],[7,6],[4,5],[4,6],[6,5]], 0,8,10));
