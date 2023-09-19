class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int count = 0;
        for(int num : nums) {
            if(isEvenDigit(num)) {
                count++;
            }
        }
        return count;
    }
    bool isEvenDigit(int num) {
        int digit = 0;
        while(num > 0) {
            digit++;
            num/=10;
        }
        return (digit % 2) == 0;
    }
};
