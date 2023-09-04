/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans = []

    nums.map(num => {
        let count = nums.filter(n => num > n);
        ans.push(count.length);
    })

    return ans;
};
