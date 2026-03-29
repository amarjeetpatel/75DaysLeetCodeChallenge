/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If closing bracket
        if (map[char]) {
            let top = stack.pop();
            if (top !== map[char]) return false;
        } else {
            // opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0;
};