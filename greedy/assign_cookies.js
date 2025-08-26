/** Assume you are an awesome parent and want to give your children some cookies. 
 * But, you should give each child at most one cookie. Each child i has a greed factor g[i], 
 * which is the minimum size of a cookie that the child will be content with; and each cookie j 
 * has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i 
 * will be content. Your goal is to maximize the number of your content children and output the 
 * maximum number. */

function assignCookies(greed, cookies){
    greed.sort((a,b) => a-b);
    cookies.sort((a,b) => a-b);
    let l=0;
    let r=0;
    while(l<greed.length && r<cookies.length){
        if(greed[l]<=cookies[r]){
            l++;
        } r++;
    }
    return l;
}

console.log(assignCookies([10,9,8,7],[5,7,6,8]));
