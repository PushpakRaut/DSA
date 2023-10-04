/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let list = [];

        let left = 0, right = matrix[0].length;
        let top = 0, bottom = matrix.length;

        while(left < right && top < bottom) {
            for(let i = left;i < right; i++) {
                list.push(matrix[top][i]);
            }
            top++;

            for(let i=top;i<bottom;i++) {
                list.push(matrix[i][right-1]);
            }
            right--;

            if(!(top < bottom && left < right)) break;

            for(let i=right-1;i>=left;i--) {
                list.push(matrix[bottom-1][i]);
            }
            bottom--;

            for(let i=bottom-1;i>=top;i--) {
                list.push(matrix[i][left]);
            }
            left++;
        }
        return list;
};
