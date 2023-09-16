class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        for(int[] arr : image) {
            flip(arr);
            for(int i=0;i<arr.length;i++) {
                arr[i] ^= 1;
            }
        }
        return image;
    }
    public void flip(int[] arr) {
        int start = 0, end = arr.length - 1;
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
