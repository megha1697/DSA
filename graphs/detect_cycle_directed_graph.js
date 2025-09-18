/** Given a directed graph with V vertices labeled from 0 to V-1. 
 * The graph is represented using an adjacency list where adj[i] lists all 
 * nodes connected to node. Determine if the graph contains any cycles.
 */
function cycleDAG(v, adj){
    let indegree = new Array(v).fill(0);
    for(let i=0;i<v;i++){
        for(let node of adj[i]){
            indegree[node]++
        }
    }
    let q=[]
    for(let i=0;i<v;i++){
        if(indegree[i] === 0){
            q.push(i)
        }
    }
    let count=0;
    while(q.length){
        let node = q.shift();
        count++;
        for(let elem of adj[node]){
            indegree[elem]--;
            if(indegree[elem] === 0){
                q.push(elem);
            }
        }
    }
    if(count === v) return false
    return true
}

console.log(cycleDAG(6,[ [ ], [ ], [3], [1], [0,1], [0,2] ]));
console.log(cycleDAG(6,[ [1], [2, 5], [3], [4], [1], [ ] ]))