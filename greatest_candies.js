function kidsWithCandies(candies, extraCandies) {
    let maxCandies=0;
    for(let i=0;i<candies.length;i++) {
        if(candies[i]>maxCandies){
            maxCandies=candies[i]
        }
    }
    const hasMax = []
    for(let i=0;i<candies.length;i++) {
        if(candies[i]+extraCandies >= maxCandies){
            hasMax.push(true)
        } else{
            hasMax.push(false)
        }
    }
    return hasMax;
};

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandies([4,2,1,1,2], 3))
console.log(kidsWithCandies([12,1,12], 3))