/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = []
    let maxNum = 0;

    candies.map(candy => {
        maxNum = (maxNum < candy) ? candy : maxNum;
    })

    candies.map(candy => {
        (candy+extraCandies >= maxNum) ? ans.push(true) : ans.push(false);
    })

    return ans;
};
