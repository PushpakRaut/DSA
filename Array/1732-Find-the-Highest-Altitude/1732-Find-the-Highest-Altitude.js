/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let ans = gain[0];

    for(let i =1;i<gain.length;i++) {
        ans = Math.max(ans, gain[i]+gain[i-1]);
        gain[i] = gain[i]+gain[i-1];
    }

    return (ans < 0) ? 0 : ans;
};
