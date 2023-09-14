<h1><a href = "https://leetcode.com/problems/count-items-matching-a-rule">1773. Count Items Matching a Rule</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/A_MVz6ewdko">https://youtu.be/A_MVz6ewdko</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h1>Question</h1>
    <p>You are given an array <code>items</code>, where each <code>items[i]</code> = [<code>typei</code>, <code>colori</code>, <code>namei</code>] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, <code>ruleKey</code> and <code>ruleValue</code>.</p>
    <p>The ith item is said to match the rule if one of the following is true:</p>
    <ul>
        <li><code>ruleKey</code> == "type" and <code>ruleValue</code> == <code>typei</code>.</li>
        <li><code>ruleKey</code> == "color" and <code>ruleValue</code> == <code>colori</code>.</li>
        <li><code>ruleKey</code> == "name" and <code>ruleValue</code> == <code>namei</code>.</li>
    </ul>
    <p>Return the number of items that match the given rule.</p>
    <h2>Examples:</h2>
    <h3>Example 1:</h3>
    <pre>
    Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
    Output: 1
    Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
    </pre>
    <h3>Example 2:</h3>
    <pre>
    Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
    Output: 2
    Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
    </pre>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= <code>items.length</code> <= 10^4</li>
        <li>1 <= <code>typei.length</code>, <code>colori.length</code>, <code>namei.length</code>, <code>ruleValue.length</code> <= 10</li>
        <li><code>ruleKey</code> is equal to either "type", "color", or "name".</li>
        <li>All strings consist only of lowercase letters.</li>
    </ul>
