<h2><a href = "https://leetcode.com/problems/matrix-diagonal-sum/description/">1572. Matrix Diagonal Sum</a></h2>
<h2>Video Solution:</h2>
<a href="">https://youtu.be/YlMv7Oz_bQI</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
    <h1>Problem Statement:</h1>
    <p>Given a square matrix <code>mat</code>, return the sum of the matrix diagonals.</p>
    <p>Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.</p>    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: mat = [[1,2,3],
                  [4,5,6],
                  [7,8,9]]
    Output: 25
    Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
    Notice that element mat[1][1] = 5 is counted only once.
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: mat = [[1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1]]
    Output: 8
    </pre>
    <h3>Example 3:</h3>
    <pre>
    Input: mat = [[5]]
    Output: 5
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li><code>n</code> == <code>mat.length</code> == <code>mat[i].length</code></li>
        <li>1 <= <code>n</code> <= 100</li>
        <li>1 <= <code>mat[i][j]</code> <= 100</li>
    </ul>

