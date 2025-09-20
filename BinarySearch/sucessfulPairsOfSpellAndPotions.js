/** You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell. */

/**Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned. */

var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    let pairs = new Array(spells.length);
    for (let i = 0; i < spells.length; i++) {
        let low = 0, high = potions.length - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (potions[mid] * spells[i] >= success) {
                high = mid - 1
            } else low = mid + 1
        }
        pairs[i] = (potions.length - low)
    }
    return pairs;

};

console.log(successfulPairs([5,1,3],[1,2,3,4,5], 7));