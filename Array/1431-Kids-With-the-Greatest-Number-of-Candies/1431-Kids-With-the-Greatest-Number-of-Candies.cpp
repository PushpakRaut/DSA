class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> ans;
        int maxNum = 0;

        for(int candy : candies){
            maxNum = max(candy, maxNum);
        }

        for(int candy : candies){
            if(candy + extraCandies >= maxNum) {
                ans.push_back(true);
            } else {
                ans.push_back(false);
            }
        }
        return ans;
    }
};
