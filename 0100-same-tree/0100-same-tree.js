/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // both null
    if (p === null && q === null) return true;

    // one null or values different
    if (p === null || q === null || p.val !== q.val) return false;

    // check left and right
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};