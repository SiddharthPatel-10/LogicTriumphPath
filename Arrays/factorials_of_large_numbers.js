/**
 * Function to find the factorial of a large number N and return the result as a list of digits.
 * @param {number} N - The number to find the factorial of.
 * @returns {number[]} - An array of digits representing the factorial of N.
 */
function factorial(N) {
    let result = [1]; // Initial factorial value as an array (starting with 1)

    // Loop through each number from 2 to N and multiply it with the current factorial value
    for (let i = 2; i <= N; i++) {
        multiply(result, i);
    }

    // The result is now stored in reverse order, so we need to reverse it back
    return result.reverse();
}

/**
 * Function to multiply the current factorial result by a number and update the result array.
 * @param {number[]} result - The current factorial result stored as an array of digits.
 * @param {number} x - The number to multiply with.
 */
function multiply(result, x) {
    let carry = 0;

    // Multiply each digit in the result array by x and handle carry
    for (let i = 0; i < result.length; i++) {
        let prod = result[i] * x + carry;
        result[i] = prod % 10; // Store the last digit of the product
        carry = Math.floor(prod / 10); // Update the carry
    }

    // Handle the remaining carry
    while (carry > 0) {
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
}

// Example usage:
console.log(factorial(5));  // Output: [1, 2, 0] (because 5! = 120)
console.log(factorial(10)); // Output: [3, 6, 2, 8, 8, 0, 0] (because 10! = 3628800)

/*
Notes for Quick Revision:
1. Problem: Find the factorial of a large number and return the digits in an array.
2. Approach:
   - Use an array to store digits of the result since the factorial can be very large.
   - Multiply each number from 2 to N by the current factorial result.
   - Handle carry over during multiplication and store it appropriately.
3. Time Complexity: O(N^2) due to nested loops (each multiplication takes time proportional to the size of the result).
4. Space Complexity: O(1) for extra space, but the result array grows with the number of digits.
5. Edge Cases:
   - Handle cases where N is 0 or 1 (0! = 1, 1! = 1).
   - Ensure that the multiplication and carry handling work correctly.
6. Tips:
   - The array stores digits in reverse order to simplify the multiplication process.
   - Reverse the array at the end to get the correct order of digits.
*/
