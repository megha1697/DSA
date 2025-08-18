function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let emptyLeft;
    let emptyRight
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i] === 0){
             emptyLeft = (i===0) || (flowerbed[i-1] === 0)
             emptyRight = (i === flowerbed.length-1) || flowerbed[i+1] === 0
        }
        if (emptyLeft && emptyRight) {
            flowerbed[i] = 1;
            count+=1
            if (count >= n){
                return true
            }
        }
    }
    return count >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
