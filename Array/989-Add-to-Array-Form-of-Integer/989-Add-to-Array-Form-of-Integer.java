class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> ans = new ArrayList<>();

        int count = k;
        int i = num.length - 1;
        while(i >= 0 || count > 0) {
            if(i >= 0) {
                count += num[i--];
            }

            ans.add(count % 10);
            count /= 10;
        }        
        Collections.reverse(ans);
        return ans;
    }
}
