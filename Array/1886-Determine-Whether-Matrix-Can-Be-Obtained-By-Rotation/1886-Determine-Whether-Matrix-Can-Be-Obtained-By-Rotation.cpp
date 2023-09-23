class Solution {
public:
    bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
        for(int i = 0;i < 4;i++) {
            if(check(mat, target)){
                return true;
            }
            else{
                mat = rotate(mat);
            }
        }
        return false;
    }

    vector<vector<int>> rotate(vector<vector<int>>& mat) {
        int n = mat.size();
        vector<vector<int>> transpose(n, vector<int>(n, 0));

        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                transpose[j][i] = mat[i][j];
            }
        }

        int s=0,e=n-1;
        while(s<e){
            for(int i=0;i<n;i++) {
                int temp = transpose[i][s];
                transpose[i][s] = transpose[i][e];
                transpose[i][e] = temp;
            }
            s++;
            e--;
        }

        return transpose;
    }


    bool check(vector<vector<int>>& mat, vector<vector<int>>& target) {
        int n = mat.size();
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(mat[i][j] != target[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }
};
