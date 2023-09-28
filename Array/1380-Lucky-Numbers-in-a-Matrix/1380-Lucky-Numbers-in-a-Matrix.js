/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
        let list = [];

        let n=matrix.length;
        let m = matrix[0].length;
        for(let i=0;i<n;i++) {
            for(let j = 0;j<m;j++) {
                let min = matrix[i][j];
                let isSmall = true;

                for(let k=0;k<m;k++) {
                    if(min > matrix[i][k]){
                        isSmall = false;
                        break;
                    }
                }

                if(isSmall){
                    for(let k = 0;k<n;k++) {
                        if(min < matrix[k][j]){
                            isSmall = false;
                            break;
                        }
                    }
                }

                if(isSmall) list.push(min);
            }
        }

        return list;
};
