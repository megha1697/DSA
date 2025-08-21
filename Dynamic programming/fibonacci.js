// Recursion
function fib(num) {
    if(num <= 1){
        return num
    }
    return fib(num-1)+fib(num-2)
}

console.log("Recursion",fib(8))

/**
 * Memoization
 * Space: O(n) + O(n)
 * Time: O(n)
 */
function fibDP(num,memo){
    if(num <= 1){
        return memo[num] = num
    }
    if(memo[num]!=-1) {
        return memo[num]
    }
    return memo[num] = fib(num-1)+fib(num-2)
}
function main(num) {
    let memo = new Array(num+1).fill(-1);
    return fibDP(num, memo);
}

console.log("Memoization",main(8));

/**
 * Tabulation
 * Space: O(n)
 * Time: O(n)
 */
function fibDPTab(num){
    let memo = new Array(num+1).fill(-1);
    memo[0]=0;
    memo[1]=1;
    for(let i=2;i<=num;i++){
        memo[i] = memo[i-1]+memo[i-2]
    }
    return memo[num]
}

console.log("Tabulation",fibDPTab(8));

/**
 * Without any extra space
 * Space: O(1)
 * TIme: O(n)
 */

function fibNoSpace(num){
    let prev=1;
    let prev2=0;
    for(let i=2;i<=num;i++){
        let curr = prev+prev2;
        prev2 =prev;
        prev = curr;
    }
    return prev
}
console.log("fibNoSpace", fibNoSpace(8));

