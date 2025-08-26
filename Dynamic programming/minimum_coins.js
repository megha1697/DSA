/** Given an integer array of coins representing coins of different denominations 
 * and an integer amount representing a total amount of money. Return the fewest number of coins 
 * that are needed to make up that amount. If that amount of money cannot be made up by any 
 * combination of the coins, return -1. There are infinite numbers of coins of each type
 * 
 * Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1. We need 3 coins to make up the amount 11.
 */

function f(ind, coins, target){
    if(ind === 0) {
        if(target % coins[0] === 0) return target/coins[0];
        return 1e9
    } 
    let notTake = 0+f(ind-1, coins, target)
    let take = Number.MAX_SAFE_INTEGER;
    if(coins[ind]<=target) take = 1+f(ind,coins, target-coins[ind]);
    return Math.min(notTake, take);
}

function minCoinRecu(coins,target) {
    let resp = f(coins.length-1, coins, target)
    return resp === 1e9 ? -1: resp;
}

console.log(minCoinRecu([1,2,5], 11));
console.log(minCoinRecu([2,5], 3));

// Memoization

function fMemo(ind, coins, target,dp){
    if(ind === 0) {
        if(target % coins[0] === 0) return target/coins[0];
        return 1e9
    } 
    if(dp[ind][target] !== -1) return dp[ind][target];
    let notTake = 0+fMemo(ind-1, coins, target, dp);
    let take = Number.MAX_SAFE_INTEGER;
    if(coins[ind]<=target) take = 1+fMemo(ind,coins, target-coins[ind], dp);
    return dp[ind][target] = Math.min(notTake, take);
}

function minCoinMemo(coins,target) {
    let dp = Array.from({length: coins.length}, () => new Array(target+1).fill(-1))
    let resp = fMemo(coins.length-1, coins, target, dp)
    return resp === 1e9 ? -1 : resp
}

console.log(minCoinMemo([1,2,5], 11));
console.log(minCoinMemo([2,5], 3));

// Tabulation

function minCoinTab(coins,T) {
    let dp = Array.from({length: coins.length}, () => new Array(T+1).fill(-1))
    for(let i=0;i<=T;i++) {
        if(i % coins[0] === 0 ) dp[0][i] = i/coins[0];
        else dp[0][T] = 1e9
    }
    for(let ind =1; ind<coins.length;ind++){
        for(let target=0;target<=T;target++) {
                let notTake = 0+dp[ind-1][target];
                let take = Number.MAX_SAFE_INTEGER;
                if(coins[ind]<=target) take = 1+dp[ind][target-coins[ind]];
                dp[ind][target] = Math.min(notTake, take);
        }
    }
    return dp[coins.length-1][T] === 1e9 ? -1 : dp[coins.length-1][T] 
}

console.log(minCoinTab([1,2,5], 11));
console.log(minCoinTab([2,5], 3));

// space optimize
function minCoinSpace(coins,T) {
    let prev = new Array(T+1).fill(-1);
    let curr = new Array(T+1).fill(-1);
    
    for(let i=0;i<=T;i++) {
        if(i % coins[0] === 0 ) prev[i] = i/coins[0];
        else prev[T] = 1e9
    }
    for(let ind =1; ind<coins.length;ind++){
        for(let target=0;target<=T;target++) {
                let notTake = 0+prev[target];
                let take = Number.MAX_SAFE_INTEGER;
                if(coins[ind]<=target) take = 1+curr[target-coins[ind]];
                curr[target] = Math.min(notTake, take);
        }
        prev=curr
    }
    return prev[T] === 1e9 ? -1 : prev[T]
}

console.log(minCoinSpace([1,2,5], 11));
console.log(minCoinSpace([2,5], 3));