class Solution {
    public int[] runningSum(int[] nums) {
        int sum = nums[0];
        int n = nums.length;

        for(int i = 1; i < n; i++) {
            nums[i] += sum;
            sum = nums[i];
        }
        return nums;
    }
}
