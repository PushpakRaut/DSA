<h1><a href = "https://leetcode.com/problems/richest-customer-wealth">1672 Richest Customer Wealth</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/KM3cElEBhf8">https://youtu.be/KM3cElEBhf8</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>

<p>You are given an <code>m x n</code> integer grid <code>accounts</code> where <code>accounts[i][j]</code> is the amount of money the <code>i</code>​​​​​​​​​​​th​​​​ customer has in the <code>j</code>​​​​​​​​​​​th​​​​ bank. This algorithm returns the wealth that the richest customer has.</p>

<p>A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.</p>

<h2>Examples</h2>

<h3>Example 1:</h3>

<p><strong>Input:</strong> <code>accounts = [[1, 2, 3], [3, 2, 1]]</code></p>
<p><strong>Output:</strong> <code>6</code></p>
<p><strong>Explanation:</strong> 1st customer has wealth = 1 + 2 + 3 = 6<br>
2nd customer has wealth = 3 + 2 + 1 = 6<br>
Both customers are considered the richest with a wealth of 6 each, so return 6.</p>

<h3>Example 2:</h3>

<p><strong>Input:</strong> <code>accounts = [[1, 5], [7, 3], [3, 5]]</code></p>
<p><strong>Output:</strong> <code>10</code></p>
<p><strong>Explanation:</strong> 1st customer has wealth = 6<br>
2nd customer has wealth = 10<br>
3rd customer has wealth = 8<br>
The 2nd customer is the richest with a wealth of 10.</p>

<h3>Example 3:</h3>

<p><strong>Input:</strong> <code>accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]</code></p>
<p><strong>Output:</strong> <code>17</code></p>

<h2>Constraints</h2>

<ul>
    <li><code>m == accounts.length</code></li>
    <li><code>n == accounts[i].length</code></li>
    <li><code>1 <= m, n <= 50</code></li>
    <li><code>1 <= accounts[i][j] <= 100</code></li>
</ul>
