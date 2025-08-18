function reverse(s){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let i=0;
    let j=s.length-1;
    let arr=s.split('');
    while(i<j){
        while(i<j && !vowels.includes(arr[i].toLowerCase())){
            i++
        }
        while(i<j && !vowels.includes(arr[j].toLowerCase())){
            j--
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--;
    }
    return arr.join('');
}

console.log(reverse('IceCreAm'));
console.log(reverse('leetcode'));
