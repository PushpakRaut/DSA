class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
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

    public int[][] rotate(int[][] mat) {
        int n = mat.length;
        int[][] transpose = new int[n][n];

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


    public boolean check(int[][] mat, int[][] target) {
        int n = mat.length;
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(mat[i][j] != target[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }
}
