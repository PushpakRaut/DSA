/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans = 0;

    accounts.map(amounts =>{
        let sum = amounts.reduce((acc, curr) => acc+curr);

        ans = (ans < sum) ? sum : ans;
    })
    return ans;
};

