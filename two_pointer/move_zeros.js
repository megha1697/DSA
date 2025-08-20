function moveZeros(arr) {
    if(arr.length === 0 || arr.length===1){
        return arr;
    }
    let i=0;
    let j=i+1;
    while (i<j && j<arr.length){
        if(arr[i]===0 && arr[j]!==0){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j++;
        } else if(arr[i]===0 && arr[j] === 0){
            j++;
        } else {
            i++;
            j++
        }
    }
    return arr;
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([0]));
console.log(moveZeros([1,0,1]));
