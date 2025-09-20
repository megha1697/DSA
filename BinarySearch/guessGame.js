var guessNumber = function(n) {
    let low = 1
    let high = n
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let guessResp = guess(mid)
        if (guessResp === -1) {
            high = mid - 1;
        } else if (guessResp === 1) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
};

guessNumber()