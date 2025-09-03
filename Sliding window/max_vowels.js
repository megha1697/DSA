/** Given a string s and an integer k, return the maximum number of vowel letters 
 * in any substring of s with length k. 
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.*/


var isVowel = (char) =>
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';

function maxVowels(s,k) {
    let str = s.split('');
    let vowelsInLen = 0;
    let maxVowels = 0;
    for(let i=0;i<k;i++){
        if(isVowel(str[i])){
            vowelsInLen +=1;
        }
    }
    maxVowels = vowelsInLen;
    for(let i=k;i<str.length;i++) {
        let first = isVowel(str[i-k]) ? 1 : 0
        let cur = isVowel(str[i]) ? 1 : 0
        vowelsInLen = vowelsInLen + cur -first;
        maxVowels = Math.max(maxVowels, vowelsInLen);
    }
    return maxVowels;
}

console.log("Maxvowels in string 'abciiidef' of length 3 : ",maxVowels("abciiidef", 3));
console.log("Maxvowels in string 'aeiou' of length 2 : ",maxVowels("aeiou", 2));
console.log("Maxvowels in string 'leetcode' of length 3 : ",maxVowels("leetcode", 3));
