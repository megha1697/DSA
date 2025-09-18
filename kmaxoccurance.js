function kmostfreqelem(nums, k) {
    let n = nums.length;
    let map = new Map();
    for(let i=0;i<n;i++){
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } else {
            map.set(nums[i], 1)
        }
    }
    let buckets = Array(nums.length + 1).fill().map(() => []);
    for (let [num, freq] of map) {
        buckets[freq].push(num);
    }

    // Step 3: Collect k most frequent
    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result
}

console.log(kmostfreqelem([1,1,1,2,2,3], 2));
console.log(kmostfreqelem([4,4,4,5,5,6], 1))
