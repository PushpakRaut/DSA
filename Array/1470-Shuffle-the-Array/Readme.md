<h1><a href = "https://leetcode.com/problems/shuffle-the-array">1470 Shuffle the Array</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/j7CYDjr3IJk">https://youtu.be/j7CYDjr3IJk</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>

<p>Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x1, x2, ..., xn, y1, y2, ..., yn]</code>, this algorithm returns the array in the form <code>[x1, y1, x2, y2, ..., xn, yn]</code>.</p>

<h2>Examples</h2>

<h3>Example 1:</h3>

<p><strong>Input:</strong> <code>nums = [2, 5, 1, 3, 4, 7]</code>, <code>n = 3</code></p>
<p><strong>Output:</strong> <code>[2, 3, 5, 4, 1, 7]</code></p>
<p><strong>Explanation:</strong> Since <code>x1=2</code>, <code>x2=5</code>, <code>x3=1</code>, <code>y1=3</code>, <code>y2=4</code>, <code>y3=7</code>, the answer is <code>[2, 3, 5, 4, 1, 7]</code>.</p>

<h3>Example 2:</h3>

<p><strong>Input:</strong> <code>nums = [1, 2, 3, 4, 4, 3, 2, 1]</code>, <code>n = 4</code></p>
<p><strong>Output:</strong> <code>[1, 4, 2, 3, 3, 2, 4, 1]</code></p>

<h3>Example 3:</h3>

<p><strong>Input:</strong> <code>nums = [1, 1, 2, 2]</code>, <code>n = 2</code></p>
<p><strong>Output:</strong> <code>[1, 2, 1, 2]</code></p>

<h2>Constraints</h2>

<ul>
    <li><code>1 <= n <= 500</code></li>
    <li><code>nums.length == 2n</code></li>
    <li><code>1 <= nums[i] <= 10^3</code></li>
</ul>
