class Solution {
public:
    bool checkIfPangram(string sentence) {
        map<char, int> ans;

        for(int i=0;i<sentence.size();i++){
            ans[sentence[i]] = 1;
        }

        return (ans.size() == 26) ? true : false;
    }
};
