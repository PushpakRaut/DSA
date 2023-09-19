/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
        let count = 0;
        nums.map(num => {
            if(isEvenDigit(num)) {
                count++;
            }
        })
        return count;
  
};
    function isEvenDigit(num) {
        let digit = (Math.floor(Math.log10(num)) + 1);
        return (digit % 2) == 0;
    } 

