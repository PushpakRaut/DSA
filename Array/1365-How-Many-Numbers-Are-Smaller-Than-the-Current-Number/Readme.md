
<body>
    <h2><a href="https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number">1365-How-Many-Numbers-Are-Smaller-Than-the-Current-Number</a></h2>
    <h2>Video Solution:</h2>
<a href="https://youtu.be/Y7qSsQAGiss">https://youtu.be/Y7qSsQAGiss</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
    <p>Given the array <code>nums</code>, for each <code>nums[i]</code> find out how many numbers in the array are smaller than it. That is, for each <code>nums[i]</code> you have to count the number of valid <code>j</code>'s such that <code>j != i</code> and <code>nums[j] &lt; nums[i]</code>.</p>
    <p>Return the answer in an array.</p>
    <h3>Example 1</h3>
    <p>Input: <code>nums = [8,1,2,2,3]</code></p>
    <p>Output: <code>[4,0,1,1,3]</code></p>
    <p>Explanation:</p>
    <ul>
        <li>For <code>nums[0]=8</code>, there exist four smaller numbers than it (1, 2, 2, and 3).</li>
        <li>For <code>nums[1]=1</code>, there does not exist any smaller number than it.</li>
        <li>For <code>nums[2]=2</code>, there exists one smaller number than it (1).</li>
        <li>For <code>nums[3]=2</code>, there exists one smaller number than it (1).</li>
        <li>For <code>nums[4]=3</code>, there exist three smaller numbers than it (1, 2, and 2).</li>
    </ul>
    <h3>Example 2</h3>
    <p>Input: <code>nums = [6,5,4,8]</code></p>
    <p>Output: <code>[2,1,0,3]</code></p>
    <h3>Example 3</h3>
    <p>Input: <code>nums = [7,7,7,7]</code></p>
    <p>Output: <code>[0,0,0,0]</code></p>
    <h2>Constraints</h2>
    <ul>
        <li><code>2 &lt;= nums.length &lt;= 500</code></li>
        <li><code>0 &lt;= nums[i] &lt;= 100</code></li>
    </ul>
</body>
</html>
