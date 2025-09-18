/**Given a Directed Acyclic Graph (DAG) with V vertices labeled from 0 to V-1.
 * The graph is represented using an adjacency list where adj[i] lists all nodes 
 * connected to node. Find any Topological Sorting of that Graph.
In topological sorting, node u will always appear before node v if there is a 
directed edge from node u towards node v(u -> v).
The Output will be True if your topological sort is correct otherwise it will 
be False.
 */
function topoSort(v, adj){
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
    let topo = [];
    while(q.length){
        let node = q.shift();
        topo.push(node);
        for(let elem of adj[node]){
            indegree[elem]--;
            if(indegree[elem] === 0){
                q.push(elem);
            }
        }
    }
    return topo;
}

console.log(topoSort(6,[ [ ], [ ], [3], [1], [0,1], [0,2] ]));
console.log(topoSort(4,[ [ ], [0], [0], [0] ]))