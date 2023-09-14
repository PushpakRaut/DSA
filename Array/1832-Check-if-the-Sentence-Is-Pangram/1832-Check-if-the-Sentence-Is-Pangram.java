class Solution {
    public boolean checkIfPangram(String sentence) {
        Map<Character, Integer> ans = new HashMap<>();

        for(int i=0;i<sentence.length();i++) {
            if(!ans.containsKey(sentence.charAt(i))){
                ans.put(sentence.charAt(i), 1);
            }
        }
        return (ans.size() == 26) ? true : false;
    }
}
