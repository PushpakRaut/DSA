/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let ans = [...Array(m)].map(e => [...Array(n)].fill(0));

    indices.map(mat => {
        const [x, y] = mat;

        for(let i=0;i<n;i++) {
            ans[x][i]++;
        }

        for(let i=0;i<m;i++) {
            ans[i][y]++;
        }
    })
    let count = 0;
    ans.map(mat => {
        mat.map(num => {
            if(num%2!=0) count++;
        })
    })

    return count;
};
