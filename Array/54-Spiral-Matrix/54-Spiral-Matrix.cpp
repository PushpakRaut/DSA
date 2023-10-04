class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> list;

        int left = 0, right = matrix[0].size();
        int top = 0, bottom = matrix.size();

        while(left < right && top < bottom) {
            for(int i = left;i < right; i++) {
                list.push_back(matrix[top][i]);
            }
            top++;

            for(int i=top;i<bottom;i++) {
                list.push_back(matrix[i][right-1]);
            }
            right--;

            if(!(top < bottom && left < right)) break;

            for(int i=right-1;i>=left;i--) {
                list.push_back(matrix[bottom-1][i]);
            }
            bottom--;

            for(int i=bottom-1;i>=top;i--) {
                list.push_back(matrix[i][left]);
            }
            left++;
        }
        return list;
    }
};
