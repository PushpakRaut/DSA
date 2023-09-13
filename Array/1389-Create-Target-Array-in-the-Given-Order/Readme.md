<h2><a href="https://leetcode.com/problems/create-target-array-in-the-given-order/">1389-Create-Target-Array-in-the-Given-Order</a></h2>
<h2>Video Solution:</h2>
<a href="https://youtu.be/MZSZnLEuu5g">https://youtu.be/MZSZnLEuu5g</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
<h1>Problem Statement:</h1>
    <p>Given two arrays of integers <code>nums</code> and <code>index</code>. Your task is to create <code>target</code> array under the following rules:</p>
    <ol>
        <li>Initially, the <code>target</code> array is empty.</li>
        <li>From left to right, read <code>nums[i]</code> and <code>index[i]</code>, insert at index <code>index[i]</code> the value <code>nums[i]</code> in <code>target</code> array.</li>
        <li>Repeat the previous step until there are no elements to read in <code>nums</code> and <code>index</code>.</li>
        <li>Return the <code>target</code> array.</li>
    </ol>
    <p>It is guaranteed that the insertion operations will be valid.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
    Explanation:
    nums       index     target
    0            0        [0]
    1            1        [0,1]
    2            2        [0,1,2]
    3            2        [0,1,3,2]
    4            1        [0,4,1,3,2]
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
    Output: [0,1,2,3,4]
    Explanation:
    nums       index     target
    1            0        [1]
    2            1        [1,2]
    3            2        [1,2,3]
    4            3        [1,2,3,4]
    0            0        [0,1,2,3,4]
    </pre>
   <h3>Example 3:</h3>
    <pre>
    Input: nums = [1], index = [0]
    Output: [1]
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= nums.length, index.length <= 100</li>
        <li><code>nums.length == index.length</code></li>
        <li>0 <= <code>nums[i]</code> <= 100</li>
        <li>0 <= <code>index[i]</code> <= <code>i</code></li>
    </ul>
