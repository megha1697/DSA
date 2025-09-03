/** Distance of nearest cell having one
 * Given a binary grid of N x M. Find the distance of the nearest 1 in the grid for each cell.
The distance is calculated as |i1 - i2| + |j1 - j2|, where i1, j1 are the row number and column number 
of the current cell, and i2, j2 are the row number and column number of the nearest cell having value 
1. */

function matrix01(mat) {
    let m = mat.length;
    let n = mat[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(0));
    const dist = Array.from({ length: m }, () => new Array(n).fill(0));
    const q = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                q.push([[i, j], 0])
                visited[i][j]=1
            } else {
                visited[i][j]=0
            }
        }
    }
    let rows = [-1, 0, 1, 0];
    let cols = [0, 1, 0, -1];
    while (q.length !== 0) {
        let entry = q.shift();
        console.log(entry);
        
        let row = entry[0][0];
        let col = entry[0][1];
        let steps = entry[1];
        dist[row][col] = steps;

        for (let i = 0; i < 4; i++) {
            let nrow = row + rows[i];
            let ncol = col + cols[i];
            if (nrow >= 0 && nrow < m && ncol >= 0 && ncol < n && visited[nrow][ncol] === 0) {
                visited[nrow][ncol] = 1;
                q.push([[nrow, ncol], steps + 1]);
            }
        }
    }
    console.log(q);
    
    return dist;
}

console.log(matrix01([[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 1, 1]]));
