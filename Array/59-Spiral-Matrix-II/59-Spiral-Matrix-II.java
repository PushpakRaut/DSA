class Solution {
    public int[][] generateMatrix(int n) {
        int[][] ans = new int[n][n];

        int left = 0, right = n;
        int top = 0, bottom = n;
        int num = 1;

        while(top < bottom && left < right) {
            for(int i = left;i<right;i++) {
                ans[top][i] = num++;
            }
            top++;

            for(int i=top;i<bottom;i++){
                ans[i][right - 1] = num++;
            }
            right--;

            for(int i=right-1;i>=left;i--) {
                ans[bottom-1][i] = num++;
            }
            bottom--;

            for(int i=bottom-1;i>=top;i--) {
                ans[i][left] = num++;
            }
            left++;
        }
        return ans;
    }
}
