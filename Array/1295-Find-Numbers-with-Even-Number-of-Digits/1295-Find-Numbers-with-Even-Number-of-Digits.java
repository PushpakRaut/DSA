class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        for(int num : nums) {
            if(isEvenDigit(num)) {
                count++;
            }
        }
        return count;
    }
    
    public boolean isEvenDigit(int num) {
        int digit = (int)(Math.floor(Math.log10(num)) + 1);
        return (digit % 2) == 0;
    }
}
