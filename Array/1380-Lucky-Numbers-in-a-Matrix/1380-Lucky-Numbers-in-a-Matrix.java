class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        List<Integer> list = new ArrayList<>();

        int n=matrix.length;
        int m = matrix[0].length;
        for(int i=0;i<n;i++) {
            for(int j = 0;j<m;j++) {
                int min = matrix[i][j];
                boolean isSmall = true;

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

                if(isSmall) list.add(min);
            }
        }

        return list;
    }
}
