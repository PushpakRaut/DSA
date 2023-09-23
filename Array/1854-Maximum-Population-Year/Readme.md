<h1><a href = "https://leetcode.com/problems/maximum-population-year/description/">1854. Maximum Population Year</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/fHtWMpcFZCA">https://youtu.be/fHtWMpcFZCA</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h1>Question</h1>
    <p>You are given a 2D integer array <code>logs</code> where each <code>logs[i]</code> = [<code>birthi</code>, <code>deathi</code>] indicates the birth and death years of the ith person.</p>
    <p>The population of some year <code>x</code> is the number of people alive during that year. The ith person is counted in year <code>x</code>'s population if <code>x</code> is in the inclusive range [<code>birthi</code>, <code>deathi - 1</code>]. Note that the person is not counted in the year that they die.</p>
    <p>Return the earliest year with the maximum population.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: logs = [[1993,1999],[2000,2010]]
    Output: 1993
    Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
    Output: 1960
    Explanation: 
    The maximum population is 2, and it had happened in years 1960 and 1970.
    The earlier year between them is 1960.
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= <code>logs.length</code> <= 100</li>
        <li>1950 <= <code>birthi</code> < <code>deathi</code> <= 2050</li>
    </ul>

