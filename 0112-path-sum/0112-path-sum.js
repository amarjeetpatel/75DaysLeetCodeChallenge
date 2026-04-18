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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    // If it's a leaf node
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }

    // Recursively check left and right subtree
    let remainingSum = targetSum - root.val;

    return hasPathSum(root.left, remainingSum) || 
           hasPathSum(root.right, remainingSum);
};