class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int ans=gain[0];
        for(int i=1;i<gain.size();i++) {
            ans = max(ans, gain[i]+gain[i-1]);
            gain[i] = gain[i]+gain[i-1];
        }

        return (ans<0) ? 0 : ans;
    }
};
