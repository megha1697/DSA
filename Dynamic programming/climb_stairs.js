/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
// Similar to fibonnaci

function climb(n) {
    if(n===0) return 1
    if(n===1) return 1
    return climb(n-1)+climb(n-2)
}

console.log(climb(2));
console.log(climb(3));

// Memoization
function climbMem(n,memo) {
    if(n===0) return memo[0] = 1;
    if(n===1) return memo[1] = 1;
    return memo[n] = climb(n-1)+climb(n-2)
}
function main(n){
    let memo = new Array(n+1).fill(-1);
    return climbMem(n,memo)
}

console.log(main(3));

function climbTab(n) {
    let memo = new Array(n+1).fill(-1);
    memo[0] = 1;
    memo[1] = 1;
    for(let i=2;i<=n;i++){
        memo[i] = memo[i-1]+memo[i-2]
    }
    return memo[n]
}
console.log(climbTab(3));

// NoSpace

function climbNoSpace(n) {
    let prev =1;
    let prev2 =1;
    for(let i=2;i<=n;i++){
        let curr = prev2+prev;
        prev2 = prev
        prev=curr
    }
    return prev
}
 console.log(climbNoSpace(3));
 