/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let i=0, j=0;
        let n = mat.length;
        let sum = 0;
        while(i<n && j < n) {
            sum += mat[i][j];
            mat[i][j] = 0;
            i++;
            j++;
        }
        j-=1;
        i=0;
        while(j>=0 && i<n){
            sum += mat[i][j];
            mat[i][j] = 0;
            j--;
            i++;
        }

        return sum;
};
