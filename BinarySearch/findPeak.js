var findPeakElement = function (nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let peak =  Math.floor((high + low) / 2);
        if(nums[peak+1]<nums[peak]){
            high = peak
        }
        else low = peak+1
    }
    return low
};

console.log(findPeakElement([1,2,3,1]));
