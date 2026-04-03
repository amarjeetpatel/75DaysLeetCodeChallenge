/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Faster than Math.floor((left + right) / 2)
        let mid = left + ((right - left) >> 1);

        if (nums[mid] === target) {
            return mid;
        } 
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}