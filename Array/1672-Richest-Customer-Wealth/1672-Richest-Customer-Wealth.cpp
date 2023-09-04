class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        
        int ans = 0;

        for(auto amounts : accounts) {
            int sum = 0;
            for(auto value : amounts) {
                sum+=value;
            }
            ans = max(sum, ans);
        }
        return ans;
    }
};
