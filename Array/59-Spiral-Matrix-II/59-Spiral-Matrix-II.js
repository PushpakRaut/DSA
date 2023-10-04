/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
        let ans = [...new Array(n)].map(e => [...new Array(n)].fill(0));

        let left = 0, right = n;
        let top = 0, bottom = n;
        let num = 1;

        while(top < bottom && left < right) {
            for(let i = left;i<right;i++) {
                ans[top][i] = num++;
            }
            top++;

            for(let i=top;i<bottom;i++){
                ans[i][right - 1] = num++;
            }
            right--;

            for(let i=right-1;i>=left;i--) {
                ans[bottom-1][i] = num++;
            }
            bottom--;

            for(let i=bottom-1;i>=top;i--) {
                ans[i][left] = num++;
            }
            left++;
        }
        return ans;
};
