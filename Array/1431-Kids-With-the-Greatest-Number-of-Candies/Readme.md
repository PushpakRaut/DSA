<h2><a href ="https://leetcode.com/problems/kids-with-the-greatest-number-of-candies">1431-Kids-With-the-Greatest-Number-of-Candies</a></h2>
    <p>There are <em>n</em> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <em>ith</em> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.</p>
    <p>Return a boolean array <code>result</code> of length <em>n</em>, where <code>result[i]</code> is <strong>true</strong> if, after giving the <em>ith</em> kid all the <code>extraCandies</code>, they will have the greatest number of candies among all the kids, or <strong>false</strong> otherwise.</p>
    <p>Note that multiple kids can have the greatest number of candies.</p>
    <h3>Example 1:</h3>
    <p>Input: candies = [2,3,5,1,3], extraCandies = 3</p>
    <p>Output: [true,true,true,false,true]</p>
    <p>Explanation: If you give all extraCandies to:</p>
    <ul>
        <li>Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.</li>
        <li>Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.</li>
        <li>Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.</li>
        <li>Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.</li>
        <li>Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.</li>
    </ul>
    <h3>Example 2:</h3>
    <p>Input: candies = [4,2,1,1,2], extraCandies = 1</p>
    <p>Output: [true,false,false,false,false]</p>
    <p>Explanation: There is only 1 extra candy. Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.</p>
    <h3>Example 3:</h3>
    <p>Input: candies = [12,1,12], extraCandies = 10</p>
    <p>Output: [true,false,true]</p>
    <h3>Constraints:</h3>
    <ul>
        <li><em>n</em> == candies.length</li>
        <li>2 <= <em>n</em> <= 100</li>
        <li>1 <= candies[i] <= 100</li>
        <li>1 <= extraCandies <= 50</li>
    </ul>
