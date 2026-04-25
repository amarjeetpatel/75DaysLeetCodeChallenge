
var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
 var WordDictionary = function() {
    this.root = {};
};

// Add word
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }

    node.isEnd = true;
};

// Search with '.' support
WordDictionary.prototype.search = function(word) {

    const dfs = (node, i) => {
        if (i === word.length) {
            return node.isEnd === true;
        }

        let char = word[i];

        if (char === '.') {
            // try all children
            for (let key in node) {
                if (key !== "isEnd" && dfs(node[key], i + 1)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node[char]) return false;
            return dfs(node[char], i + 1);
        }
    };

    return dfs(this.root, 0);
};