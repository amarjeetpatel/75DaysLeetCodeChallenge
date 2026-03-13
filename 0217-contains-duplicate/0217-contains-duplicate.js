/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const count = new Set();
    
    for (const num of nums) {
       count[num] = count[num] + 1 || 1;
       if(count[num]>=2){
        return true
       }
    }
    return false
};