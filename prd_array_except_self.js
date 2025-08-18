function productExceptSelf(nums) {
    const ans=new Array(nums.length-1);

    let left =1;
    for(let i=0;i<nums.length;i++){
        ans[i]=left;
        left *= nums[i];
    }

    let right=1;
    for(let j=nums.length-1;j>=0;j--){
        ans[j]*=right;
        right *= nums[j]
    }
    return ans;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));