/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const leftH = height[left];
        const rightH = height[right];

        const width = right - left;
        const minH = leftH < rightH ? leftH : rightH;

        const area = width * minH;
        if (area > max) max = area;

        // Move the pointer with smaller height
        if (leftH < rightH) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}