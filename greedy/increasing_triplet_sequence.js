/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */
function increasingTriplet(nums){
    let numi = Number.MAX_SAFE_INTEGER;
    let numj = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i<nums.length;i++){
        if(nums[i]<=numi){
            numi=nums[i]
        } else if(nums[i] <= numj){
            numj=nums[i]
        } else {
            return true
        }
    }
    return false
}

console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))