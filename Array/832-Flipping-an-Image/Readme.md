<h1><a href = "https://leetcode.com/problems/flipping-an-image/description/">832. Flipping an Image</a></h1>

<h2>Video Solution:</h2>
<a href="https://youtu.be/LX4Md0BCNPA">https://youtu.be/LX4Md0BCNPA</a>

- Don't forget to give the star to the Repository

- Remember, your support means the world to me. If you find this tutorial valuable, consider supporting my work on : 
   - [Buy Me a Coffee] https://www.buymeacoffee.com/pushpakraut 
   - [GitHub sponsor] https://github.com/sponsors/PushpakRaut.
<hr />

<h4>Question</h4>

  <h2>Problem Statement:</h2>
  <p>
    Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
  </p>

  <h3>Example 1:</h3>
  <p>
    <strong>Input:</strong> image = [[1,1,0],[1,0,1],[0,0,0]]<br>
    <strong>Output:</strong> [[1,0,0],[0,1,0],[1,1,1]]<br>
    <strong>Explanation:</strong>
    <ul>
      <li>First, reverse each row: [[0,1,1],[1,0,1],[0,0,0]].</li>
      <li>Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]].</li>
    </ul>
  </p>

  <h3>Example 2:</h3>
  <p>
    <strong>Input:</strong> image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]<br>
    <strong>Output:</strong> [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]<br>
    <strong>Explanation:</strong>
    <ul>
      <li>First, reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].</li>
      <li>Then, invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]].</li>
    </ul>
  </p>

  <h3>Constraints:</h3>
  <ul>
    <li>n == image.length</li>
    <li>n == image[i].length</li>
    <li>1 ≤ n ≤ 20</li>
    <li>images[i][j] is either 0 or 1</li>
  </ul>
