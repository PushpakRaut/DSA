<h1><a href = "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/">1886. Determine Whether Matrix Can Be Obtained By Rotation</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/YBFHBixI0lM">https://youtu.be/YBFHBixI0lM</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
    <p>Given two n x n binary matrices <code>mat</code> and <code>target</code>, return true if it is possible to make <code>mat</code> equal to <code>target</code> by rotating <code>mat</code> in 90-degree increments, or false otherwise.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
    Output: true
    Explanation: We can rotate <code>mat</code> 90 degrees clockwise to make <code>mat</code> equal <code>target</code>.
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
    Output: false
    Explanation: It is impossible to make <code>mat</code> equal to <code>target</code> by rotating <code>mat</code>.
    </pre>
    <h3>Example 3:</h3>
    <pre>
    Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
    Output: true
    Explanation: We can rotate <code>mat</code> 90 degrees clockwise two times to make <code>mat</code> equal <code>target</code>.
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li><code>n</code> == <code>mat.length</code> == <code>target.length</code></li>
        <li><code>n</code> == <code>mat[i].length</code> == <code>target[i].length</code></li>
        <li>1 <= <code>n</code> <= 10</li>
        <li><code>mat[i][j]</code> and <code>target[i][j]</code> are either 0 or 1</li>
    </ul>
