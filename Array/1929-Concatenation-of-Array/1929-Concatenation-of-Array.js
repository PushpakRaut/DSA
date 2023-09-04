/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    let n = nums.length

    for(let i = 0;i < n*2; i++) {
        ans[i] = nums[i%n];
    }
    return ans;
};
