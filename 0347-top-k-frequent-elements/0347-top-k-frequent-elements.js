/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = {};
    const freqBucket = Array(nums.length + 1).fill().map(() => []);

    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;
    }

    for (let n in freq) {
        freqBucket[freq[n]].push(Number(n));
    }

    const res = [];
    for (let i = freqBucket.length - 1; i >= 0 && res.length < k; i--) {
        res.push(...freqBucket[i]);
    }

    return res.slice(0, k);
};