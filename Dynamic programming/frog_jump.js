/**
 * There is a frog on the '1st' step of an 'N' stairs long staircase. 
 * The frog wants to reach the 'Nth' stair. 'HEIGHT[i]' is the height of the '(i+1)th' stair.
 * If Frog jumps from 'ith' to 'jth' stair, the energy lost in the jump is given by absolute value of ( HEIGHT[i-1] - HEIGHT[j-1] ). 
 * If the Frog is on 'ith' staircase, he can jump either to '(i+1)th' stair or to '(i+2)th' stair. 
 * Your task is to find the minimum total energy used by the frog to reach from '1st' stair to 'Nth' stair.
*/

function frogJump(ind, height, memo) {
    if (ind === 0) return 0
    if (memo[ind] !== -1) return memo[ind]
    let left = frogJump(ind - 1, height, memo) + Math.abs(height[ind] - height[ind - 1])
    let right = Number.MAX_SAFE_INTEGER;
    if (ind > 1) right = frogJump(ind - 2, height, memo) + Math.abs(height[ind] - height[ind - 2])
    return memo[ind] = Math.min(left, right);
}

function main(height) {
    let memo = new Array(height.length).fill(-1);
    return frogJump(height.length - 1, height, memo);
}

console.log(main([30, 10, 60, 10, 60, 50]));

/** Tabulation bottom up approach */
function frogJump(height) {
    let dp = new Array(height.length).fill(-1);
    dp[0] = 0
    for (let i = 1; i < height.length; i++) {
        let fs = dp[i - 1] + Math.abs(height[i] - height[i - 1])
        let ss = Number.MAX_SAFE_INTEGER;
        if (i > 1) {
            ss = dp[i - 2] + Math.abs(height[i] - height[i - 2])
        }
        dp[i] = Math.min(fs, ss);
    }
    return dp[height.length - 1]
}

console.log(frogJump([30, 10, 60, 10, 60, 50]));

/** Without extra space */
function frogJumpSpace(height) {
    let prev = 0
    let secondPrev = 0;
    let curr;
    for (let i = 1; i < height.length; i++) {
        curr = prev + secondPrev;
        fs = prev + Math.abs(height[i] - height[i - 1])
        ss = Number.MAX_SAFE_INTEGER;
        if (i > 1) {
            ss = secondPrev + Math.abs(height[i] - height[i - 2])
        }
        curr = Math.min(fs, ss);
        secondPrev = prev
        prev = curr
    }
    return prev
}

console.log(frogJumpSpace([30, 10, 60, 10, 60, 50]));


/** K JUMPS */

function frogJumpK(height, k) {
    let dp = new Array(height.length).fill(-1);
    dp[0] = 0
    for (let i = 1; i < height.length; i++) {
        let minsteps = Number.MAX_SAFE_INTEGER;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                let jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
                minsteps = Math.min(minsteps, jump)
            }
        }
        dp[i] = minsteps;
    }
    return dp[height.length-1]
}

console.log(frogJumpK([30, 10, 60, 10, 60, 50], 4));