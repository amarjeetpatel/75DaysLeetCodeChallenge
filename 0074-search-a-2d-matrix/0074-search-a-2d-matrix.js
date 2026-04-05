/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);

        // Convert 1D index → 2D index
        let row = (mid / n) | 0;   // fast floor
        let col = mid % n;

        let value = matrix[row][col];

        if (value === target) return true;

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}