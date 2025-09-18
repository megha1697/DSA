

class Node {
    constructor() {
        this.links = new Array(26);
        this.flag = false;
    }
    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== undefined;
    }
    put(ch, node) {
        this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }
    get(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    setEnd() {
        this.flag = true;
    }
    isEnd() {
        return this.flag;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie {
    constructor() {
        this.root = new Node()
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.containsKey(ch)) {
            node.put(ch, new Node())
        }
        node = node.get(ch);
    }
    node.setEnd(node)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.containsKey(ch)) {
            return false;
        }
        node = node.get(ch)
    }
    return node.isEnd(node);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node.containsKey(ch)) {
            return false;
        }
        node = node.get(ch)
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

