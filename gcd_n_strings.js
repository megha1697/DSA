function findgcd(str1, str2) {
    if (str1.length < str2.length) {
        return findgcd(str2, str1)
    }
    else if (!(str1.startsWith(str2))) {
        return ''
        
    }
    else if (str2.length === 0) {
        return str1
    }
    else { return findgcd(str1.substr(str2.length), str2) }
}

console.log('GCD of ABCABC & ABC',findgcd("ABCABC", "ABC"));
console.log('GCD of ABABAB & ABAB',findgcd("ABABAB", "ABAB"));
console.log('GCD of LEET & CODE',findgcd("LEET", "CODE"));

// Time : O(log(n))
// space: O(1)

/** Euclidean algorithm  */

function gcdStrings(a, b){
    if(b.length>a.length){
        [a,b] = [b,a]
    }
    if(!(a.startsWith(b))){
        return ""
    }
    while(b.length>0){
        const tmp =b
        b=a%b
        a=tmp
        if(b.length>0){
            a=b
            b = tmp.substr(tmp.length-b.length)
        }
    }
    return a;
}

console.log('Euclidean GCD of ABCABC & ABC: ',gcdStrings("ABCABC", "ABC"));
console.log('Euclidean GCD of ABABAB & ABAB: ',gcdStrings("ABABAB", "ABAB"));
console.log('Euclidean GCD of LEET & CODE: ',gcdStrings("LEET", "CODE"));