/**
 * Given an array of characters chars, compress it using the following algorithm:
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:

 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead, be stored in the input character array chars. 
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.

 * After you are done modifying the input array, return the new length of the array.

 * You must write an algorithm that uses only constant extra space.
 */

function stringCompress(chars) {
    let read = 0;
    let write = 0;
    while (read < chars.length) {
        const char = chars[read];
        let count = 0
        while(read<chars.length && chars[read] === char){
            read++
            count++
        }
        chars[write++] = char;
        if(count>1){
            // this is to store 12 in 2 separate index as "1" and "2"
            for(const digit of count.toString()){
                chars[write++] = digit
            }
            
        }
    }
    return write
}

console.log(stringCompress(["a","a","b","b","c","c","c"]));
console.log(stringCompress(["a"]));
console.log(stringCompress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
