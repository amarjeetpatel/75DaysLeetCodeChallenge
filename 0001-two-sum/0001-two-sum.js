/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(currentNum, i);
    }

    return [];
};
