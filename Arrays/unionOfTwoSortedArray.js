// Brute Force Approach
function unionBruteForce(arr1, arr2) {
    const combined = [...arr1, ...arr2]; // Concatenate both arrays
    combined.sort((a, b) => a - b); // Sort the combined array
    const result = [];

    // Remove duplicates
    for (let i = 0; i < combined.length; i++) {
        if (i === 0 || combined[i] !== combined[i - 1]) {
            result.push(combined[i]);
        }
    }

    return result;
}

// Better Approach (Using Set)
function unionBetter(arr1, arr2) {
    const combined = [...arr1, ...arr2]; // Concatenate both arrays
    const uniqueSet = new Set(combined); // Use Set to automatically remove duplicates
    return Array.from(uniqueSet).sort((a, b) => a - b); // Convert Set back to array and sort
}

// Optimal Approach (Two Pointers)
function unionOptimal(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) {
        if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }

    while (j < arr2.length) {
        if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}

// Example Usage
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [2, 3, 5, 7];

console.log("Brute Force Union:", unionBruteForce(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log("Better Union:", unionBetter(arr1, arr2));          // Output: [1, 2, 3, 4, 5, 6, 7]
console.log("Optimal Union:", unionOptimal(arr1, arr2));        // Output: [1, 2, 3, 4, 5, 6, 7]

/**
 * Notes for Revision:
 * 
 * - Brute Force Approach:
 *   - Time Complexity: O((m+n) log(m+n)) due to sorting, Space Complexity: O(m+n) due to combining arrays.
 * 
 * - Better Approach (Using Set):
 *   - Time Complexity: O((m+n) log(m+n)) due to sorting, Space Complexity: O(m+n) due to the Set and array conversion.
 * 
 * - Optimal Approach (Two Pointers):
 *   - Time Complexity: O(m+n) because we traverse both arrays once, Space Complexity: O(1) extra space (excluding the result array).
 * 
 * Tips & Tricks:
 * - The two-pointer technique is powerful for problems involving two sorted arrays.
 * - The Set approach is useful when handling duplicates in arrays.
 */
