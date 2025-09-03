/** You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average 
 * value and return this value. Any answer with a calculation error less than 
 * 10-5 will be accepted. */

function findAverageSum(nums, k){
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    let maxSum = sum;
    for(let i=k;i<nums.length;i++){
        sum=sum+nums[i]-nums[i-k];
        maxSum=Math.max(maxSum,sum);
    }
    return maxSum/k;
}

console.log("Maximum average sum of [1,12,-5,-6,50,3] for K 4 : ",findAverageSum([1,12,-5,-6,50,3],4));
