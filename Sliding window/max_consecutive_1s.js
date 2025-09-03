/** Given a binary array nums and an integer k, return the maximum number 
 * of consecutive 1's in the array if you can flip at most k 0's. */

function maxConsecutive1s(nums, k) {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) k -= 1
        if (k < 0) {
            if (nums[left] === 0) {
                k += 1
            }
            left++
        }
    }
    return nums.length-left;
}

console.log(maxConsecutive1s([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(maxConsecutive1s([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));

