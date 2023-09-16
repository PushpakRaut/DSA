class Solution {
    public int largestAltitude(int[] gain) {
        int ans = gain[0];
        for(int i=1;i<gain.length;i++) {
            ans = Math.max(ans, gain[i]+gain[i-1]);
            gain[i] = gain[i]+gain[i-1];
        }

        return (ans<0) ? 0 : ans;
    }
}
