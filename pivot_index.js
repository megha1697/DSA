var pivotIndex = function(nums) {
    let sumLeft=[];
    let sumRight=[];
    for(let i=0;i<nums.length;i++){
        let sum=0
        for(let j=i-1;j>=0;j--){
            sum+=nums[j]
        }
        sumLeft[i]=sum;
    }
    for(let i=0;i<nums.length;i++){
        let sum=0
        for(let j=i+1;j<nums.length;j++){
            sum+=nums[j]
        }
        sumRight[i]=sum;
    }
    for(let i=0;i<nums.length;i++){
        if(sumLeft[i]===sumRight[i]) return i;
    }
    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]));
function pivotIndexTime(nums) {
let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum+=nums[i]
    }
    let leftSum =0
    for(let i=0;i<nums.length;i++){
        let p=nums[i];
        if(leftSum===totalSum-leftSum-p){
            return i
        }
        leftSum+=p
    }
    return -1
}

console.log(pivotIndexTime([1,7,3,6,5,6]));