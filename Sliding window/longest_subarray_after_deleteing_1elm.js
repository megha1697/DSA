/** Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the 
resulting array. Return 0 if there is no such subarray.
*/

var longestSubarray = function (nums) {
    let flipped = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) { flipped -= 1; }
        if (flipped < 0) {
            if (nums[left] === 0) {
                flipped +=1;
            }
            left++
        }
    }
    return nums.length - left - 1;
};

console.log("longestSubarray of 1s after deleteing 1 elem from the array [1,1,0,1]:",longestSubarray([1,1,0,1]));
console.log("longestSubarray of 1s after deleteing 1 elem from the array [0,1,1,1,0,1,1,0,1]:",longestSubarray([0,1,1,1,0,1,1,0,1]));
