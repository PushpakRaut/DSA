class Solution {
public:
    int oddCells(int m, int n, vector<vector<int>>& indices) {
        vector<vector<int>> ans(m, vector<int> (n, 0));

        for(vector<int> mat : indices) {
            for(int i=0;i<n;i++) {
                ans[mat[0]][i]++;
            }

            for(int i=0;i<m;i++) {
                ans[i][mat[1]]++;
            }
        }
        int count = 0;
        for(vector<int> mat : ans) {
            for(int num : mat) {
                if(num % 2 != 0) count++;
            }
        }

        return count;
    }
};
