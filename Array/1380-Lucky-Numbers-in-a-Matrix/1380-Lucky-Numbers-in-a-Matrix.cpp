class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
         vector<int> list;

        int n=matrix.size();
        int m = matrix[0].size();
        for(int i=0;i<n;i++) {
            for(int j = 0;j<m;j++) {
                int min = matrix[i][j];
                bool isSmall = true;

                for(int k=0;k<m;k++) {
                    if(min > matrix[i][k]){
                        isSmall = false;
                        break;
                    }
                }

                if(isSmall){
                    for(int k = 0;k<n;k++) {
                        if(min < matrix[k][j]){
                            isSmall = false;
                            break;
                        }
                    }
                }

                if(isSmall) list.push_back(min);
            }
        }

        return list;
    }
};
