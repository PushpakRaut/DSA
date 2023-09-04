class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<>();

        int maxNum = candies[0];

        for(int i = 1;i<candies.length;i++) {
            maxNum = Math.max(maxNum, candies[i]);
        }

        for(int candy : candies) {
            if(candy + extraCandies >= maxNum){
                ans.add(true);
            }else{
                ans.add(false);
            }
        }

        return ans;
    }
}
