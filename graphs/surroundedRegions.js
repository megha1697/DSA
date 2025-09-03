/**You are given a matrix mat of size N x M where each cell contains either 'O' or 'X'.
Your task is to replace all 'O' cells that are completely surrounded by 'X' with 'X'.

Rules:
An 'O' (or a group of connected 'O's) is considered surrounded if it is not connected to any border of the matrix.
Two 'O' cells are considered connected if they are adjacent horizontally or vertically (not diagonally).
A region of connected 'O's that touches the border (i.e., first row, last row, first column, or last column) is not surrounded and should not be changed. 
*/

function dfs(row,col,visited,mat){
    visited[row][col] =1;
    let rows = [-1,0,1,0]
    let cols = [0,1,0,-1]
    for(let i=0;i<4;i++){
        let nrow = row+rows[i]
        let ncol = col+cols[i]
        if(nrow>=0 && nrow<mat.length && ncol>=0 && ncol<mat[0].length && visited[nrow][ncol]!== 1 && mat[nrow][ncol] === 'O'){
            visited[nrow][ncol] = 1;
            dfs(nrow,ncol,visited,mat);
        }
        
    }
}
function surroundedRegion(board) {
    let n=board.length;
    let m=board[0].length;
    let visited = Array.from({length:board.length},() => new Array(board[0].length).fill(0));
    // traverse first and last row
    for (let j=0;j<m;j++){
        if(!visited[0][j] && board[0][j] === 'O'){
            dfs(0,j,visited,board)
        }
        if(!visited[n-1][j] && board[n-1][j] === 'O'){
            dfs(n-1,j,visited,board)
        }
    }

    // traverse first column and last column
    for (let j=0;j<n;j++){
        if(!visited[j][0] && board[j][0] === 'O'){
            dfs(j,0,visited,board)
        }
        if(!visited[j][m-1] && board[j][m-1] === 'O'){
            dfs(j,m-1,visited,board)
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(visited[i][j] === 0 &&board[i][j] === 'O'){
                board[i][j] = 'X'
            }
        }
    }
    return board;
}

console.log(surroundedRegion([ ["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"] ]));
console.log(surroundedRegion( [ ["X", "X", "X"], ["X", "O", "X"], ["X", "X", "X"] ]));

