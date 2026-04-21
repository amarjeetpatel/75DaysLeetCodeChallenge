/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let front = 0; // pointer instead of shift()

    while (front < queue.length) {
        const levelSize = queue.length - front;
        const level = new Array(levelSize); // pre-allocate array

        for (let i = 0; i < levelSize; i++) {
            const node = queue[front++];
            level[i] = node.val;

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};