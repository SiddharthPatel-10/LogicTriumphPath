// Problem: Longest Consecutive Subsequence
// Given an array of non-negative integers, you need to find the length of the longest subsequence where the elements are consecutive integers.
// The elements in the subsequence can appear in any order in the array.

// Example 1:
// Input:
// N = 7
// a[] = {2, 6, 1, 9, 4, 5, 3}
// Output: 6
// Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsequence.

// Example 2:
// Input:
// N = 7
// a[] = {1, 9, 3, 10, 4, 20, 2}
// Output: 4
// Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.



// 1. Approach: Sorting-Based Solution
// Description:
// This approach involves sorting the array first. After sorting, the longest consecutive subsequence will be grouped together.
// We then iterate through the sorted array to find the length of the longest consecutive subsequence.

// Steps:
// 1. First, check if the array is null or empty. If it is, return 0.
// 2. Sort the array in ascending order.
// 3. Initialize maxLength to store the maximum length of the consecutive subsequence found so far, and currentLength to keep track of the current subsequence length.
// 4. Iterate through the sorted array, and for each element:
//    - If the current element is exactly 1 more than the previous element, increment the currentLength (because they are consecutive).
//    - If the current element is not consecutive (and not a duplicate), reset the currentLength to 1.
//    - Update maxLength to be the maximum of maxLength and currentLength.
// 5. Return the maxLength.

// Time Complexity:
// - O(N log N) due to sorting the array.
// - The iteration after sorting is O(N), making the overall complexity O(N log N).

// Space Complexity:
// - O(1) if sorting is done in place.

// JavaScript Implementation of Sorting-Based Approach
function findLongestConseqSubseqSorting(arr) {
    if (arr == null || arr.length == 0) {
        return 0; // Handle edge case where array is null or empty
    }

    arr.sort((a, b) => a - b); // Sort the array in ascending order

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1] + 1) {
            // Elements are consecutive
            currentLength++;
        } else if (arr[i] != arr[i - 1]) {
            // Reset current length if elements are not consecutive and not duplicates
            currentLength = 1;
        }
        // Update maxLength
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Example usage of the sorting-based approach:
let arr2 = [1, 9, 3, 10, 4, 20, 2];
console.log(findLongestConseqSubseqSorting(arr2)); // Output: 4


// Notes for Quick Revision (Sorting-Based Approach)
// 1. Problem: Find the length of the longest consecutive subsequence using a sorting-based approach.
// 2. Approach:
//    - Sort the array first to group consecutive numbers together.
//    - Traverse the sorted array to find the length of the longest sequence.
// 3. Time Complexity: O(N log N) due to sorting.
// 4. Space Complexity: O(1) if sorting in place.
// 5. Edge Cases:
//    - Handle empty or null arrays by returning 0.
//    - Account for duplicate numbers in the array.
// 6. Pros and Cons:
//    - Pros: Simple and easy to understand approach.
//    - Cons: Less efficient than the Set-based approach for large inputs due to the sorting step.










// 2. Alternative Approach to Solve the Problem:
// 1. Understanding the Problem:
// - We are given an array, and we need to find the longest sequence of consecutive integers.
// - For example, in the array [2, 6, 1, 9, 4, 5, 3], the longest consecutive subsequence is [1, 2, 3, 4, 5, 6], which has a length of 6.

// 2. Key Insights:
// - We can solve this problem efficiently by using a Set (or HashMap) to store the elements of the array.
// - For each element, we only start counting the length of the sequence if the current element is the start of a sequence (i.e., the element just smaller than it does not exist in the Set).

// 3. Steps:
// - Store all the elements in a Set to allow O(1) lookup.
// - Iterate through the array, and for each element:
//   - Check if it is the start of a sequence by verifying if there is no element smaller by 1 in the Set.
//   - If it is the start, count the length of the sequence by checking how many consecutive elements exist after it.
// - Keep track of the maximum length of any sequence found.

// 4. Time Complexity:
// - The expected time complexity is O(N), where N is the number of elements in the array. This is because, in the worst case, each element is processed twice (once to start a sequence and once during counting).

// 5. Space Complexity:
// - The space complexity is O(N) for storing elements in the Set.

// JavaScript Implementation
function findLongestConseqSubseq(arr, N) {
    // Create a set to store array elements
    let set = new Set(arr);
    let maxLength = 0;

    // Traverse the array
    for (let i = 0; i < N; i++) {
        // If current element is the start of a sequence
        if (!set.has(arr[i] - 1)) {
            // Initialize current element as start of sequence
            let length = 1;
            let currentNum = arr[i];
            
            // Check for the next elements in the sequence
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                length += 1;
            }
            
            // Update the maximum length found
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength;
}

// Example usage:
let arr = [2, 6, 1, 9, 4, 5, 3];
let N = arr.length;
console.log(findLongestConseqSubseq(arr, N)); // Output: 6


// Notes for Quick Revision
// 1. Problem: Find the length of the longest consecutive subsequence in an array of non-negative integers.
// 2. Optimal Approach:
//    - Use a Set to store all elements.
//    - For each element, check if it's the start of a sequence (i.e., arr[i] - 1 is not in the Set).
//    - Count the sequence length starting from this element.
//    - Track and update the maximum sequence length.
// 3. Time Complexity: O(N)
// 4. Space Complexity: O(N)
// 5. Tips and Tricks:
//    - Always consider using a Set or HashMap when you need quick lookups or to check existence in a collection.
//    - Identify the start of the sequence to avoid unnecessary counting, making the solution efficient.
//    - For this type of problem, consider edge cases like an empty array or all elements being the same.

// Tips and Tricks
// - Handling Large Input Arrays: Always prefer using Set or HashMap to avoid nested loops, which can cause the time complexity to skyrocket.
// - Optimization: When you detect a start of a sequence, make sure to check and extend the sequence only once to avoid redundant computations.
// - Edge Cases: Consider arrays with duplicate elements, single element arrays, and arrays where all elements are the same.