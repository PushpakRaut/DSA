/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    for(let i = 0;i < 4;i++) {
            if(check(mat, target)){
                return true;
            }
            else{
                mat = rotate(mat);
            }
        }
        return false;
};

    function rotate(mat) {
        let n = mat.length;
        let transpose = [...Array(n)].map(e => [...Array(n)].fill(0));

        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                transpose[j][i] = mat[i][j];
            }
        }

        let s=0,e=n-1;
        while(s<e){
            for(let i=0;i<n;i++) {
                let temp = transpose[i][s];
                transpose[i][s] = transpose[i][e];
                transpose[i][e] = temp;
            }
            s++;
            e--;
        }

        return transpose;
    }


    function check(mat, target) {
        let n = mat.length;
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                if(mat[i][j] != target[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }
