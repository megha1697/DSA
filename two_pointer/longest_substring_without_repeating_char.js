/** Given a string s, find the length of the longest substring without duplicate characters.
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

var lengthOfLongestSubstring = function(s) {
    let left=0;
    let right=0;
    let len =0;
    let map = new Map();
    while(right<s.length){
        if(map.has(s[right])){
            if(map.get(s[right]) >= left)
                left=map.get(s[right])+1;
        } 
        map.set(s[right], right);
        len = Math.max(len, (right-left)+1)
        right++;
    }
    return len
};

console.log(lengthOfLongestSubstring("abba"))