/** Maximum sum of non-adjacent elements */

function maxSumNonAdjacentElem(arr) {
    let dp = new Array(arr.length).fill(-1);
    return findMax(arr.length-1,arr, dp)
}

function findMax(ind, arr,dp){
    if(ind===0) return arr[ind]
    if(ind<=0)return 0
    if(dp[ind]!= -1) return dp[ind];
    let pick= arr[ind]+findMax(ind-2, arr, dp)
    let notPick = 0+ findMax(ind-1, arr, dp);
    return Math.max(pick,notPick);
}

console.log(maxSumNonAdjacentElem([2,1,4,9]));

/** Time=O(n), space = O(n) */
function maxSumNonAdjacentElemTab(arr) {
    let dp = new Array(arr.length).fill(-1);
    dp[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        let take = arr[i]+ ((i>1) ? dp[i-2]:0)
        let notTake= 0+ dp[i-1]
        dp[i] = Math.max(take, notTake)
    }
    return dp[arr.length-1];
}

console.log(maxSumNonAdjacentElemTab([2,1,4,9]));

/** Time=O(n), space = O(1) */
function maxSumNonAdjacentElemSpace(arr) {
    let prev=arr[0];
    let prev2=0
    for(let i=1;i<arr.length;i++){
        let take = arr[i]+ ((i>1) ? prev2:0)
        let notTake= 0+ prev
        let curr = Math.max(take, notTake)
        prev2 = prev
        prev=curr
    }
    return prev;
}

console.log(maxSumNonAdjacentElemSpace([2,1,4,9]));
