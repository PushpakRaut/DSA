/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let ans = [...Array(m)].map(e => [...Array(n)]);

    for(let i =0;i<n;i++) {
            for(let j=0;j<m;j++) {
                ans[j][i] = matrix[i][j];
            }
        }

        return ans;
};
