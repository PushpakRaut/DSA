class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();

        int left = 0, right = matrix[0].length;
        int top = 0, bottom = matrix.length;

        while(left < right && top < bottom) {
            for(int i = left;i < right; i++) {
                list.add(matrix[top][i]);
            }
            top++;

            for(int i=top;i<bottom;i++) {
                list.add(matrix[i][right-1]);
            }
            right--;

            if(!(top < bottom && left < right)) break;

            for(int i=right-1;i>=left;i--) {
                list.add(matrix[bottom-1][i]);
            }
            bottom--;

            for(int i=bottom-1;i>=top;i--) {
                list.add(matrix[i][left]);
            }
            left++;
        }
        return list;
    }
}
