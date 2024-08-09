/**
 * Problem Statement:
 * Given an array of integers, find the largest element in the array.
 *
 * Example:
 * Input: [10, 20, 4, 45, 99]
 * Output: 99
 */

// Brute Force Approach
function findLargestElementBruteForce(arr) {
  // Start by assuming the first element is the largest
  let max = arr[0];

  // Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is greater
    }
  }

  return max;
}

// Better Approach (Using Math.max)
function findLargestElementBetter(arr) {
  // Use Math.max with the spread operator
  return Math.max(...arr);
}

// Optimal Approach (Brute force is already optimal in this case)
function findLargestElementOptimal(arr) {
  // The brute force method is the optimal one for this problem
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example Usage
const arr = [10, 20, 4, 45, 99];

console.log("Brute Force Approach:", findLargestElementBruteForce(arr)); // Output: 99
console.log("Better Approach:", findLargestElementBetter(arr)); // Output: 99
console.log("Optimal Approach:", findLargestElementOptimal(arr)); // Output: 99

/**
 * Notes:
 *
 * - **Brute Force**: Iterates through the array and compares each element to find the maximum.
 *   - **Time Complexity**: O(n)
 *   - **Space Complexity**: O(1)
 *
 * - **Better Approach**: Uses the built-in `Math.max()` function with the spread operator.
 *   - **Time Complexity**: O(n)
 *   - **Space Complexity**: O(1)
 *   - **Tip**: The spread operator can be memory-intensive for very large arrays. Use it when array size is manageable.
 *
 * - **Optimal Approach**: The brute force method is already optimal, as it only requires a single pass through the array.
 *
 * **Tips & Tricks**:
 * 1. **Edge Cases**: Always consider edge cases like an empty array or an array with all negative numbers.
 *
 * 2. **Shortcut**: When you're in a coding interview or under time pressure, remember that finding the max in an array is `O(n)` by default. You can immediately start with a simple loop or use `Math.max`.
 *
 * 3. **Use Cases**:
 *    - **Math.max** is quick and easy for smaller datasets.
 *    - **Manual iteration** gives you more control and can be optimized for larger datasets.
 *
 * 4. **When Stuck**: If you're struggling to come up with a solution, start by writing down what you would do manually to find the largest element—this often helps in formulating a plan.
 *
 * **Quick Recap**:
 * - **Single Pass**: The optimal way to find the maximum element is by iterating through the array once.
 * - **Math.max**: Use this for quick implementations, but be cautious of performance on large arrays.
 * - **Stay Calm**: If unsure, begin with the brute force approach and then optimize.
 */
