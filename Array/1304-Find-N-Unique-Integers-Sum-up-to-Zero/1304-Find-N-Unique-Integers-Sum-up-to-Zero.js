/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
        let ans = new Array(n, 0);
        if(n==1) return [0];
        let limit = Math.floor(n/2);
        let num = 1;

        for(let i=0;i<limit;i++) {
            ans[i] = num;
            ans[n-i-1] = -num;
            num++;
        }

        if(n%2!=0){
            ans[limit] = 0;
        }

        return ans;
};
