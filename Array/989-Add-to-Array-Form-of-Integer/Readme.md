<h2><a href="https://leetcode.com/problems/add-to-array-form-of-integer/description/">989. Add to Array-Form of Integer</a></h2>
<h2>Video Solution:</h2>
<a href="https://youtu.be/VAr0MR9BrGk">https://youtu.be/VAr0MR9BrGk</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
    <p>The array-form of an integer <code>num</code> is an array representing its digits in left to right order.</p>
    <p>For example, for <code>num = 1321</code>, the array form is <code>[1,3,2,1]</code>.</p>
    <p>Given <code>num</code>, the array-form of an integer, and an integer <code>k</code>, return the array-form of the integer <code>num + k</code>.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: num = [1,2,0,0], k = 34
    Output: [1,2,3,4]
    Explanation: 1200 + 34 = 1234
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: num = [2,7,4], k = 181
    Output: [4,5,5]
    Explanation: 274 + 181 = 455
    </pre>
    <h3>Example 3:</h3>
    <pre>
    Input: num = [2,1,5], k = 806
    Output: [1,0,2,1]
    Explanation: 215 + 806 = 1021
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= <code>num.length</code> <= 10^4</li>
        <li>0 <= <code>num[i]</code> <= 9</li>
        <li><code>num</code> does not contain any leading zeros except for the zero itself.</li>
        <li>1 <= <code>k</code> <= 10^4</li>
    </ul>
