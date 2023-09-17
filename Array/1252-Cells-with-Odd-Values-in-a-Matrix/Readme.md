<h2><a href="https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/">1252. Cells with Odd Values in a Matrix</a></h2>
<h2>Video Solution:</h2>
<a href="https://youtu.be/FLfASaN7CBQ">https://youtu.be/FLfASaN7CBQ</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>
    <h1>Problem Statement:</h1>
    <p>There is an <code>m x n</code> matrix that is initialized to all 0's. There is also a 2D array <code>indices</code> where each <code>indices[i]</code> = [<code>ri</code>, <code>ci</code>] represents a 0-indexed location to perform some increment operations on the matrix.</p>
    <p>For each location <code>indices[i]</code>, do both of the following:</p>
    <ol>
        <li>Increment all the cells on row <code>ri</code>.</li>
        <li>Increment all the cells on column <code>ci</code>.</li>
    </ol>
    <p>Given <code>m</code>, <code>n</code>, and <code>indices</code>, return the number of odd-valued cells in the matrix after applying the increment to all locations in <code>indices</code>.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: m = 2, n = 3, indices = [[0,1],[1,1]]
    Output: 6
    Explanation: Initial matrix = [[0,0,0],[0,0,0]].
    After applying first increment it becomes [[1,2,1],[0,1,0]].
    The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: m = 2, n = 2, indices = [[1,1],[0,0]]
    Output: 0
    Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= <code>m</code>, <code>n</code> <= 50</li>
        <li>1 <= <code>indices.length</code> <= 100</li>
        <li>0 <= <code>ri</code> < <code>m</code></li>
        <li>0 <= <code>ci</code> < <code>n</code></li>
    </ul>

