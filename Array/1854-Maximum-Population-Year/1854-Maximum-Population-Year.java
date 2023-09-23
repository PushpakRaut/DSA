class Solution {
    public int maximumPopulation(int[][] logs) {
        int[] arr = new int[101];

        for(int[] log : logs) {
            for(int j=log[0];j<log[1];j++) {
                arr[j-1950]++;
            }
        }

        int maxYear = 1950, max = 0;
        for(int i = 0; i<101;i++) {
            if(max < arr[i]) {
                max = arr[i];
                maxYear = i + 1950;
            }
        }

        return maxYear;
    }
}
