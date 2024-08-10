// Problem: Maximum Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in the array.

// Brute Force Approach
function maxConsecutiveOnesBruteForce(arr) {
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (arr[i] === 1) {
            for (let j = i; j < arr.length && arr[j] === 1; j++) {
                count++;
            }
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}

// Better Approach
function maxConsecutiveOnesBetter(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Optimal Approach
function maxConsecutiveOnesOptimal(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (const num of arr) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Example Usage
const arr = [1, 1, 0, 1, 1, 1];
console.log("Brute Force Approach:", maxConsecutiveOnesBruteForce(arr)); // Output: 3
console.log("Better Approach:", maxConsecutiveOnesBetter(arr));         // Output: 3
console.log("Optimal Approach:", maxConsecutiveOnesOptimal(arr));       // Output: 3

/**
 * Notes for Revision:
 * 
 * - Brute Force Approach:
 *   - Check every element, and for each '1', count consecutive '1's.
 *   - Time Complexity: O(n^2) - Inefficient for large arrays.
 *   - Use only if the array size is small and a straightforward approach is sufficient.
 * 
 * - Better Approach:
 *   - Traverse the array once, counting consecutive '1's and resetting the count when encountering '0'.
 *   - Time Complexity: O(n) - Efficient and easier to implement.
 * 
 * - Optimal Approach:
 *   - Similar to the better approach, but with slightly cleaner code using a `for...of` loop.
 *   - Time Complexity: O(n) - Best for larger arrays.
 * 
 * Tips & Tricks:
 * - Always start with a brute force solution to understand the problem, then optimize.
 * - Use `Math.max` to update the maximum count while iterating.
 * - When facing array problems, think about how you can maintain state as you traverse.
 */
