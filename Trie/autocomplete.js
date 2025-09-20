/** SEARCH SUGGESTIONS SYSTEM */

/**You are given an array of strings products and a string searchWord.
Design a system that suggests at most three product names from products after each character of 
searchWord is typed. Suggested products should have common prefix with searchWord. If there are 
more than three products with a common prefix return the three lexicographically minimums products.
Return a list of lists of the suggested products after each character of searchWord is typed. */

/** SORTING */
function suggestedProducts(products, searchWord){
    products.sort();
    let res = [];
    for (let i=0;i<searchWord.length;i++) {
        products = products.filter((p)=>p[i]==searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
}

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse"));
console.log(suggestedProducts(["havana"], "havana"));


/** TRIE */
var suggestedProductsTrie = function(products, searchWord) {
    products.sort();
    let trie = {};
    for(const p of products){
        let root = trie;
        for (let i=0;i<p.length;i++){
            if(!root[p[i]]) root[p[i]] = {'sug': []}
            if(root[p[i]]['sug'].length <3) root[p[i]]['sug'].push(p);
            root = root[p[i]];
        }
    }
    let root=trie, res = [];
    for(let i=0;i<searchWord.length;i++){
        if(root) root = root[searchWord[i]];
        res.push(!root ? []: root['sug']);
    }
    return res;
};
console.log('Implementation with trie');

console.log(suggestedProductsTrie(["mobile","mouse","moneypot","monitor","mousepad"],"mouse"));
console.log(suggestedProductsTrie(["havana"], "havana"));