/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];

    let n = nums.length;

    for(let i = 0;i<n;i++) {
        ans.push( nums[nums[i]]);
    }

    return ans;
};
