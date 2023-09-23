class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        vector<int> ans;

        int count = k;
        int i = num.size() - 1;
        while(i >= 0 || count > 0) {
            if(i >= 0) {
                count += num[i--];
            }

            ans.push_back(count % 10);
            count = count / 10;
        }

        reverse(ans.begin(), ans.end());

        return ans;
    }
};
