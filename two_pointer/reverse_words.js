function reverseWords(s) {
    s = s.trim()
    let arr = s.split(' ').filter(word => word !== '')
    let i=0;
    let j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr.join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));