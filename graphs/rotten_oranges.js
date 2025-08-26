function rottenOranges(adj){
    let r= adj.length
    let c=adj[0].length
    let visited = Array.from({length: r}, () => new Array(c).fill())
    let queue = []
    let countFresh=0
    if(r===1 && c===1) return adj[0][0]
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(adj[i][j] === 2){
                queue.push([[i,j],0])
                visited[i][j] = 2
            } else {
                visited[i][j] = 0
            }
            if (adj[i][j] === 1) countFresh++
        }
    }
    let delRow = [-1, 0, +1, 0]
    let delCol = [0,1,0,-1]
    console.log(queue);
    
    let time=0
    let cnt=0
    while(queue.length){
        let elem = queue.shift();
        console.log(elem);
        
        let row = elem[0][0]
        let col = elem[0][1]
         time = elem[1];
        
        for(let i=0;i<4;i++){
            let nrow = row+delRow[i]
            let ncol = col+delCol[i]
            if(nrow>=0 && nrow<r && ncol>=0 && ncol<c && visited[nrow][ncol] === 0 && adj[nrow][ncol] === 1){
                queue.push([[nrow,ncol],time+1])
                adj[nrow][ncol]=2
                visited[nrow][ncol] = 2
                cnt++;
            }
        }
    }

    if(cnt!=countFresh) return -1
    return time;
}

console.log(rottenOranges( [ [2, 1, 1] , [0, 1, 1] , [1, 0, 1] ]));

console.log(rottenOranges([ [2,1,1] , [1,1,0] , [0,1,1] ] ));

console.log(rottenOranges([[0,1,2],[0,1,2],[2,1,1]]));
console.log(rottenOranges([[0,0,0,0]]));
