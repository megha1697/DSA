/** Given an array of positive integers arr[] and a value sum, determine if there is a subset 
 * of arr[] with sum equal to given sum.
*/

// Recursion
function f(ind, arr, target) {
    if (target === 0) return true
    if (ind === 0) return (arr[0] === target)
    let notTake = f(ind - 1, target, arr);
    let take = false
    if(arr[ind]<=target) take = f(ind-1, arr, target-arr[ind])
    return take || notTake
}

function subsetSumRecursion(arr, target) {
    return f(arr.length - 1, arr, target)
}

console.log(subsetSumRecursion([1,2,3,4], 4));

// Memoization
function f1(ind, arr, target, dp){
    if(target === 0) return true;
    if(ind === 0) return (arr[0] === target)
    if (dp[ind][target] != -1) return dp[ind][target];
    let notTake = f1(ind-1, arr, target, dp);
    let take =false;
    if(arr[ind]<=target) take = f1(ind-1, arr, target-arr[ind], dp);
    return dp[ind][target] = take || notTake;

}

function subsetSumMemo(arr, target){
    let dp = Array.from({ length: arr.length }, () => new Array(target+1).fill(-1));
    return f1(arr.length-1, arr, target, dp)
}

console.log(subsetSumMemo([1,2,3,4], 4));

// Tabulation

function subsetSumTab(arr, target){
    let dp = Array.from({length:arr.length}, () => new Array(target+1).fill(false));
    for(let i=0;i<arr.length;i++) dp[i][0] = true;
    dp[0][arr[0]]= true;
    for(let i=1;i<arr.length;i++){
        for(let j=1;j<=target;j++){
            let notTake = dp[i-1][j]
            let take = false
            if(arr[i]<=j) take = dp[i-1][j-arr[i]]
            dp[i][j]= take || notTake
        }
    }
    return dp[arr.length-1][target]
}

console.log(subsetSumTab([1,2,6,5], 4));

// Space Optimized
// Space: O(target)
function subsetSumSpaceOptimized(arr, target){
    let prev = new Array(target+1).fill(false);
    prev[0] = true
    if(arr[0] <= target)prev[arr[0]] = true
    for(let i=1;i<arr.length;i++){
        let curr = new Array(target+1).fill(false);
        curr[0] = true
        for(let j=1;j<=target;j++){
            let notTake = prev[j]
            let take = false
            if(arr[i]<=j) take = prev[j-arr[i]]
            curr[j]= take || notTake
        }
        prev.splice(0, prev.length, ...curr);
    }
    return prev[target]
}

console.log("Arr: [1,2,5,4] and sum=4",subsetSumSpaceOptimized([1,2,5,4], 4));
console.log("Arr: [7, 4, 5] and sum=2",subsetSumSpaceOptimized([7, 4, 5], 2));
console.log("Arr: [6,6,6,3,8] and sum 16",subsetSumSpaceOptimized([6,6,6,3,8], 16));
