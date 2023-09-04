class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int sum = nums[0];
        int n = nums.size();
        for(int i = 1; i < n; i++) {
            nums[i] += sum;
            sum = nums[i];
        }
        return nums;
    }
};
