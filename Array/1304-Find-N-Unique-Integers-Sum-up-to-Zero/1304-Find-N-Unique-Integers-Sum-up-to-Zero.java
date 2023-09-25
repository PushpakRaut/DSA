class Solution {
    public int[] sumZero(int n) {
        int[] ans = new int[n];
        int limit = n/2;
        int num = 1;

        for(int i=0;i<limit;i++) {
            ans[i] = num;
            ans[n-i-1] = -num;
            num++;
        }

        if(n%2!=0){
            ans[limit] = 0;
        }

        return ans;
    }
}
