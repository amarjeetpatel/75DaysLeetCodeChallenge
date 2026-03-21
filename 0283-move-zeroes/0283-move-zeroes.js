/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0; // position for next non-zero

    // Step 1: move all non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    // Step 2: fill remaining with 0
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
};