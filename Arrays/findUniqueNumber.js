// Problem: Find the number that appears once, while all other elements appear twice

// Brute Force Approach
function findUniqueBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
  return -1; // If no unique element found (should not happen per problem constraints)
}

// Better Approach
function findUniqueWithHashMap(arr) {
  const frequency = {};

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (const num in frequency) {
    if (frequency[num] === 1) {
      return parseInt(num);
    }
  }

  return -1; // If no unique element found (should not happen per problem constraints)
}

// Optimal Approach
function findUniqueWithXOR(arr) {
  let unique = 0;

  for (const num of arr) {
    unique ^= num; // XOR operation
  }

  return unique;
}

// Example Usage
const arr = [2, 3, 5, 3, 2];
console.log("Brute Force Approach:", findUniqueBruteForce(arr)); // Output: 5
console.log("Better Approach:", findUniqueWithHashMap(arr)); // Output: 5
console.log("Optimal Approach:", findUniqueWithXOR(arr)); // Output: 5

/**
 * Notes for Revision:
 * 
 * - Brute Force Approach:
 *   - Use nested loops to check the frequency of each element.
 *   - Time Complexity: O(n^2) - Inefficient for large arrays.
 * 
 * - Better Approach:
 *   - Use a hash map to count the frequency of elements.
 *   - Time Complexity: O(n), Space Complexity: O(n).
 * 
 * - Optimal Approach:
 *   - Use XOR to find the unique element in one pass.
 *   - Time Complexity: O(n), Space Complexity: O(1).
 *   - This approach is efficient and ideal for large arrays.
 * 
 * Tips & Tricks:
 * - XOR is a powerful tool for problems involving pairs and unique elements.
 * - Remember that XOR-ing a number with itself results in 0, and XOR-ing any number with 0 returns the number.
 * 
 * - Example: arr = [2, 3, 5, 3, 2]
// We need to find the element that appears only once.

// XOR Operation Explanation:
// - XOR of two identical numbers is 0. (e.g., 2 ^ 2 = 0)
// - XOR of any number with 0 remains the number itself. (e.g., 0 ^ 5 = 5)
// - XOR operation is commutative and associative, meaning the order of operations doesn't matter.

let unique = 0;  // Initialize with 0

// Step-by-step XOR operation on the array:
// Initial state: unique = 0

unique ^= 2;  // unique = 0 ^ 2 = 2
unique ^= 3;  // unique = 2 ^ 3 = 1  (in binary: 10 ^ 11 = 01)
unique ^= 5;  // unique = 1 ^ 5 = 4  (in binary: 01 ^ 101 = 100)
unique ^= 3;  // unique = 4 ^ 3 = 7  (in binary: 100 ^ 11 = 111)
unique ^= 2;  // unique = 7 ^ 2 = 5  (in binary: 111 ^ 10 = 101)

// Final state: unique = 5
// The number 5 is the unique element that appears only once in the array.

 or also understand like this for only understanding
 arr[]= {1, 1, 2, 4, 4}
 
 xor = 1 ^ 1 = 0
 xor = 2
 xor = 4 ^ 4 = 0
 2 remain so 2 is the output.

 */
