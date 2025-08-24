function pushZerosToEnd(arr) {
    // code here
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] === 0 && arr[j] === 0) {
            j++;
        }
        else if (arr[i] === 0 && arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j++;
        } else {
            i++;
            j++;
        }

    }
    return arr
}

console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(pushZerosToEnd([10,20,30]));
console.log(pushZerosToEnd([0,0]));
