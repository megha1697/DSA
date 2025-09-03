/** An image is represented by a 2-D array of integers, each integer representing the pixel value
 * of the image. Given a coordinate (sr, sc) representing the starting pixel (row and column) of
 * the flood fill, and a pixel value newColor, "flood fill" the image. To perform a flood fill, 
 * consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel 
 * of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels 
 * (also with the same colour as the starting pixel), and so on. Replace the colour of all of the 
 * aforementioned pixels with the newColor. */

function dfs(row, col, ans, grid,newColor, delRow, delCol, iniColor){
    ans[row][col] = newColor;
    let n = grid.length;
    let m=grid[0].length;
    for(let i=0;i<4; i++){
        let nrow = row+delRow[i];
        let ncol = col+delCol[i];
        if(nrow>=0&&nrow<n && ncol>=0 && ncol<m && grid[nrow][ncol]===iniColor && ans[nrow][ncol]!= newColor) {
            dfs(nrow,ncol,ans,grid,newColor,delRow, delCol, iniColor)
        }
    }
}

function floodFill(grid, sr, sc, newColor){
    let iniColor = grid[sr][sc];
    let ans = grid;
    let delRow = [-1, 0,1, 0]
    let delCol = [0, 1,0,-1]
    dfs(sr,sc,ans,grid, newColor, delRow, delCol, iniColor);
    return ans;
}

console.log(floodFill( [ [1, 1, 1], [1, 1, 0], [1, 0, 1] ], 1,1,2));
