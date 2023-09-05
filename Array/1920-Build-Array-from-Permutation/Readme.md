<h1><a href = "https://leetcode.com/problems/build-array-from-permutation/">Permutation Array Transformation</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/EEFmSuXaAoY">https://youtu.be/EEFmSuXaAoY</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
<p>Given a zero-based permutation <code>nums</code> (0-indexed), this algorithm builds an array <code>ans</code> of the same length where <code>ans[i] = nums[nums[i]]</code> for each <code>0 <= i < nums.length</code> and returns it.</p>

<p>A zero-based permutation <code>nums</code> is an array of distinct integers from 0 to <code>nums.length - 1</code> (inclusive).</p>

<h2>Examples</h2>

<h3>Example 1:</h3>

<p><strong>Input:</strong> <code>nums = [0, 2, 1, 5, 3, 4]</code></p>
<p><strong>Output:</strong> <code>[0, 1, 2, 4, 5, 3]</code></p>
<p><strong>Explanation:</strong> The array <code>ans</code> is built as follows:</p>
<pre>
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0, 1, 2, 4, 5, 3]
</pre>

<h3>Example 2:</h3>

<p><strong>Input:</strong> <code>nums = [5, 0, 1, 2, 3, 4]</code></p>
<p><strong>Output:</strong> <code>[4, 5, 0, 1, 2, 3]</code></p>
<p><strong>Explanation:</strong> The array <code>ans</code> is built as follows:</p>
<pre>
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4, 5, 0, 1, 2, 3]
</pre>

<h2>Constraints</h2>

<ul>
    <li>1 <= nums.length <= 1000</li>
    <li>0 <= nums[i] < nums.length</li>
    <li>The elements in <code>nums</code> are distinct.</li>
</ul>
