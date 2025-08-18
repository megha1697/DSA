var mergeAlternately = function(word1, word2) {
    let p1=0;
    let p2=0;
    let resp='';
    while(p1<word1.length || p2<word2.length){
        if(p1<word1.length){
            resp+=word1[p1];
            p1++;
        }
        if(p2<word2.length){
            resp+=word2[p2];
            p2++;
        }
    }
    return resp;
};

console.log(mergeAlternately('Hello', 'World'));
console.log(mergeAlternately('Megha', 'Dandappagouda'));