/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let arr = new Array(101).fill(0);

        for(let i=0;i<logs.length;i++) {
            for(let j=logs[i][0];j<logs[i][1];j++) {
                arr[j-1950]++;
            }
        }

        let maxYear = 1950, max = 0;
        for(let i = 0; i<101;i++) {
            if(max < arr[i]) {
                max = arr[i];
                maxYear = i + 1950;
            }
        }

        return maxYear;
};
