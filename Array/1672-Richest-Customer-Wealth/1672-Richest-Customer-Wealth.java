class Solution {
    public int maximumWealth(int[][] accounts) {
        int ans = 0;

        for(int[] amounts : accounts) {
            int sum = 0;
            for(int value : amounts) {
                sum+=value;
            }
            ans = Math.max(sum, ans);
        }
        return ans;
    }
}
