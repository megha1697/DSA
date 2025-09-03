/** Given are the two distinct words startWord and targetWord, and a list of size N, denoting wordList 
 * of unique words of equal size M. Find the length of the shortest transformation sequence from 
 * startWord to targetWord.

Keep the following conditions in mind:

A word can only consist of lowercase characters.
Only one letter can be changed in each transformation.
Each transformed word must exist in the wordList including the targetWord.
startWord may or may not be part of the wordList

Note: If there’s no possible way to transform the sequence from startWord to targetWord return 0. 
*/

function wordLadder1(startWord, targetWord, wordList) {
    let q =[];
    let set = new Set(wordList);
    q.push([startWord, 1])
    set.delete(startWord);
    while(q.length > 0){
        const entry = q.shift();
        let steps = entry[1]
        let word = entry[0]
        if(word === targetWord) return steps;
        for(let i=0;i<word.length;i++){
            let wordArr = word.split('');
            let original = wordArr[i];
            // traversing through alphabets in javascript
            for(let ch = 97; ch <= 122; ch++){
                let char = String.fromCharCode(ch)
                wordArr[i]=char
                if(set.has(wordArr.join(''))) {
                    set.delete(wordArr.join(''))
                    q.push([wordArr.join(''),steps+1])
                }
            }
            wordArr[i] = original;
            word = wordArr.join('')
        }
    }
    return 0;
}

console.log(wordLadder1("der", "dfs",["des","der","dfr","dgt","dfs"]));
console.log(wordLadder1("gedk", "geek", ["geek", "gefk"]));
