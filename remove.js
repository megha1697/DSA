function getRemovableIndices(str1, str2) {
    // Write your code here
        let res=[];
        // if(str1.length !== str2.length+1) {
        //     res.push(-1)
        //     return res
        // };
        for (let i of str1){
            let newS = str1.slice(0, i) + str1.slice(i+1);
            if(newS === str2){
                res.push(i);
            }
        }
        if(res.length === 0){
            res.push(-1)
        }
        return res;
}

console.log(getRemovableIndices('aabbb', 'aabb'));
console.log(getRemovableIndices('mmgghh', 'mfggh'));
