var nearestExit = function (maze, entrance) {
    let n = maze.length;
    let m = maze[0].length;
    let q = [];
    maze[entrance[0]][entrance[1]] = '+'
    q.push([entrance, 0]);
    let rows = [-1, 0, 1, 0]
    let cols = [0, 1, 0, -1]
    
    while (q.length>0) {
        let entry = q.shift();
        
        let row = entry[0][0];
        let col = entry[0][1];
        let steps = entry[1]+1;
        for (let i = 0; i < rows.length; i++) {
            let nrow = row + rows[i];
            let ncol = col + cols[i];
            if (nrow < 0 || nrow >= n || ncol < 0 || ncol >= m || maze[nrow][ncol] === '+') {
                continue;
            }
            if ((nrow === 0 || nrow === n - 1 || ncol === 0 || ncol === m - 1)) {
                // console.log(nrow, ncol, steps);
                
                return steps;
            }
            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && maze[nrow][ncol] !== '+') {
                maze[nrow][ncol] = '+';
                q.push([[nrow, ncol], steps]);
            }
        }

    }
    return -1;
};

var nearestExit1 = function(maze, entrance) {
    const m = maze.length, n = maze[0].length;
    const dirs = [[-1,0],[0,1],[1,0],[0,-1]];

    // BFS setup
    const queue = [[entrance[0], entrance[1]]];
    let head = 0;               // <-- head pointer
    maze[entrance[0]][entrance[1]] = '+';
    let steps = 0;

    while (head < queue.length) {
        const size = queue.length - head;
        steps++;

        for (let i = 0; i < size; i++) {
        const [r, c] = queue[head++];   // <-- O(1) dequeue

            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;

                // we skip out-of-bounds or visited
                if (nr < 0 || nr >= m || nc < 0 || nc >= n || maze[nr][nc] === '+')
                continue;
                
                // If it's on the boundary, it's the nearest exit
                if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1)
                return steps;

                // we mark visited and enqueue
                maze[nr][nc] = '+';
                queue.push([nr, nc]);
            }
        }
    }

    return -1;
}

console.log("nearestExit1",nearestExit1([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1,2]));
console.log("nearestExit",nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1,2]));

console.log("nearestExit1",nearestExit1([["+","+","+"],[".",".","."],["+","+","+"]],[1,0]));
console.log("nearestExit",nearestExit([["+","+","+"],[".",".","."],["+","+","+"]],[1,0]));

console.log("nearestExit1",nearestExit1([[".","+"]], [0,0]));
console.log("nearestExit",nearestExit([[".","+"]], [0,0]));