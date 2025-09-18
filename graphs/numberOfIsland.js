function numberOfIsland(grid) {
    let n=grid.length;
    let m=grid[0].length;
    let visited = Array.from({length: n},() => new Array(m).fill(-1));
    let start;
    let count = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(visited[i][j] === -1 && grid[i][j] === '1'){
                start=[i,j];
                count++;
                let q=[];
                q.push(start);
                // let nrow = [-1,-1,0,1,1,1,0,-1];
                // let ncol = [0,1,1,1,0,-1,-1,-1];
                let nrow = [-1,0,1,0];
                let ncol=[0,1,0,-1]
                while(q.length>0){
                    let entry=q.shift()
                    let r = entry[0]
                    let c = entry[1]
                    for(let i=0;i<nrow.length;i++){
                        let row = r+nrow[i];
                        let col = c+ncol[i];
                        if(row>=0 && row<n && col>=0 && col<m && visited[row][col]=== -1 && grid[row][col]==='1'){
                            visited[row][col]=1;
                            q.push([row,col]);
                        }
                    }
                }
            }
        }
    }
    return count;
}

console.log(numberOfIsland([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));

console.log(numberOfIsland([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));