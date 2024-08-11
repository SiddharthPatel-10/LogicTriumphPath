// Problem: Intersection of Two Sorted Arrays

// Brute Force Approach
function intersectionBruteForce(arr1, arr2) {
    const result = [];
    const set = new Set(arr2);  // Convert arr2 to a set for quick lookups

    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {  // Check if arr1 element is in arr2 set
            result.push(arr1[i]);
            set.delete(arr1[i]);  // Remove to avoid duplicates
        }
    }

    return result;
}

// Better Approach
function intersectionBetter(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

// Optimal Approach (Two Pointers)
function intersectionOptimal(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

// Example Usage
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 4, 6, 7];

console.log("Brute Force Approach:", intersectionBruteForce(arr1, arr2));  // Output: [2, 4]
console.log("Better Approach:", intersectionBetter(arr1, arr2));           // Output: [2, 4]
console.log("Optimal Approach:", intersectionOptimal(arr1, arr2));         // Output: [2, 4]

/**
 * Notes for Revision:
 * 
 * - Brute Force Approach:
 *   - Convert one array to a set and check elements of the other array against it.
 *   - Time Complexity: O(n * m), Space Complexity: O(min(n, m)).
 * 
 * - Better Approach:
 *   - Use two pointers to traverse both arrays and find common elements.
 *   - Handles duplicates by checking the last added element in the result.
 *   - Time Complexity: O(n + m), Space Complexity: O(min(n, m)).
 * 
 * - Optimal Approach:
 *   - Similar to the better approach but with a focus on efficiency and clarity.
 *   - The two-pointer technique helps in traversing both arrays simultaneously.
 *   - Time Complexity: O(n + m), Space Complexity: O(min(n, m)).
 * 
 * Tips & Tricks:
 * - The two-pointer technique is efficient for sorted arrays as it allows simultaneous traversal.
 * - Always check for duplicates before adding an element to the result in intersection problems.
 */
