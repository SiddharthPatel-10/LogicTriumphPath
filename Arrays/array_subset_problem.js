/**
 * Function to determine if array a2[] is a subset of array a1[]
 * @param {number[]} a1 - The main array
 * @param {number[]} a2 - The array to check if it's a subset of a1
 * @returns {string} - "Yes" if a2 is a subset of a1, otherwise "No"
 */
function isSubset(a1, a2) {
    // Step 1: Create a frequency map for a1
    let frequencyMap = new Map();

    // Step 2: Populate the frequency map with elements from a1
    for (let i = 0; i < a1.length; i++) {
        if (frequencyMap.has(a1[i])) {
            frequencyMap.set(a1[i], frequencyMap.get(a1[i]) + 1);
        } else {
            frequencyMap.set(a1[i], 1);
        }
    }

    // Step 3: Check if a2 is a subset of a1
    for (let j = 0; j < a2.length; j++) {
        if (!frequencyMap.has(a2[j]) || frequencyMap.get(a2[j]) === 0) {
            return "No"; // If element is not found or not enough occurrences
        } else {
            // Decrease the frequency as we've found a match
            frequencyMap.set(a2[j], frequencyMap.get(a2[j]) - 1);
        }
    }

    return "Yes"; // All elements of a2 are found in a1 with required frequency
}

// Example usage:
let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
let a2 = [11, 3, 7, 1, 7];
console.log(isSubset(a1, a2)); // Output: "Yes"

let a1_2 = [10, 5, 2, 23, 19];
let a2_2 = [19, 5, 3];
console.log(isSubset(a1_2, a2_2)); // Output: "No"


/*
Notes for Quick Revision:
1. Problem: Check if one array is a subset of another, considering duplicates.
2. Approach:
   - Use a HashMap to count frequencies of elements in the main array.
   - Traverse the subset array and check if each element is present in the HashMap with sufficient frequency.
3. Time Complexity: O(max(n, m)) where n is the size of a1 and m is the size of a2.
4. Space Complexity: O(n) due to the HashMap used for storing frequencies.
5. Edge Cases:
   - Handle empty arrays.
   - Consider duplicate elements and their counts.
6. Pros and Cons:
   - Pros: Efficient with linear time complexity relative to the size of the arrays.
   - Cons: Requires extra space for the HashMap.
*/



