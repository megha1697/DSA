function bfs(adj) {
    let visited = new Array(adj.length).fill(false);
    let src = 0
    let list = [];
    let queue = [0]
    visited[src] = 1
    while (queue.length !== 0) {
        let node = queue.shift();
        list.push(node)
        for (let j of adj[node]) {
            if (visited[j] != 1) {
                visited[j] = true
                queue.push(j)
            }
        }
    }
    return list
}


let adj =
    [[1, 2], [0, 2, 3], [0, 4], [1, 4], [2, 3]];
let src = 0;
let ans = bfs(adj);
console.log(ans);