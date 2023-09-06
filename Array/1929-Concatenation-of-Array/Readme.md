<h1><a href = "https://leetcode.com/problems/concatenation-of-array/description/">Array Concatenation</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/LX4Md0BCNPA">https://youtu.be/LX4Md0BCNPA</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>

<p>Given an integer array <code>nums</code> of length <code>n</code>, you want to create an array <code>ans</code> of length <code>2n</code> where <code>ans[i] == nums[i]</code> and <code>ans[i + n] == nums[i]</code> for <code>0 <= i < n</code> (0-indexed).</p>

<p>Specifically, <code>ans</code> is the concatenation of two <code>nums</code> arrays.</p>

<h2>Examples</h2>

<h3>Example 1:</h3>

<p><strong>Input:</strong> <code>nums = [1, 2, 1]</code></p>
<p><strong>Output:</strong> <code>[1, 2, 1, 1, 2, 1]</code></p>
<p><strong>Explanation:</strong> The array <code>ans</code> is formed as follows:</p>
<pre>
ans = [nums[0], nums[1], nums[2], nums[0], nums[1], nums[2]]
    = [1, 2, 1, 1, 2, 1]
</pre>

<h3>Example 2:</h3>

<p><strong>Input:</strong> <code>nums = [1, 3, 2, 1]</code></p>
<p><strong>Output:</strong> <code>[1, 3, 2, 1, 1, 3, 2, 1]</code></p>
<p><strong>Explanation:</strong> The array <code>ans</code> is formed as follows:</p>
<pre>
ans = [nums[0], nums[1], nums[2], nums[3], nums[0], nums[1], nums[2], nums[3]]
    = [1, 3, 2, 1, 1, 3, 2, 1]
</pre>

<h2>Constraints</h2>

<ul>
    <li><code>n == nums.length</code></li>
    <li><code>1 <= n <= 1000</code></li>
    <li><code>1 <= nums[i] <= 1000</code></li>
</ul>
