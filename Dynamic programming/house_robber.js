/** You are a professional robber planning to rob houses along a street. Each house has a 
 * certain amount of money stashed, the only constraint stopping you from robbing each of them is 
 * that adjacent houses have security systems connected and it will automatically contact the 
 * police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return 
 * the maximum amount of money you can rob tonight without alerting the police.
*/

function maxSumNonAdjacent(arr) {
    let prev = arr[0];
    let prev2 = 0;
    for(let i=1;i<arr.length;i++){
        let take = arr[i];
        if(i>1) take+=prev2
        let notTake = 0+ prev;
        let cur = Math.max(take, notTake);
        prev2=prev;
        prev = cur;
    }
    return prev;
}

function houseRobber(arr){
    let temp1=[];
    let temp2=[];
    if(arr.length ===1) return arr[0];
    for(let i=0;i<arr.length;i++){
        if(i!=0) temp1.push(arr[i])
        if(i!=arr.length-1) temp2.push(arr[i])
    }
    return Math.max(maxSumNonAdjacent(temp1), maxSumNonAdjacent(temp2))
}

console.log(houseRobber([2,3,2,5]));
console.log(houseRobber([2,7,9,3,1]));
