function romanToInt(s) {
    // Create a HashMap to map Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // Iterate through the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current and next Roman numeral
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        // If the next value is greater, subtract the current value (handling cases like IV, IX)
        if (next > current) {
            total -= current;
        } else {
            // Otherwise, add the current value to the total
            total += current;
        }
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));    // Output: 3
console.log(romanToInt("IV"));     // Output: 4
console.log(romanToInt("IX"));     // Output: 9
console.log(romanToInt("LVIII"));  // Output: 58
console.log(romanToInt("MCMXCIV"));// Output: 1994

/**
 * Tips and Tricks:
 * 1. Understand the Roman Numeral Rules:
 *    - Roman numerals use specific symbols with values.
 *    - The subtraction rule (e.g., IV for 4, IX for 9) is crucial.
 *    - Larger symbols before smaller symbols are added; smaller before larger are subtracted.
 *
 * 2. Use a HashMap for Quick Lookups:
 *    - A HashMap allows O(1) time complexity for looking up the integer value of each Roman numeral symbol.
 *
 * 3. Iterate Through the String Once:
 *    - By comparing each numeral with the next one, you can decide whether to add or subtract, ensuring an efficient solution.
 *
 * Time Complexity:
 * - O(n): The algorithm processes each character in the string exactly once, where n is the length of the string.
 *
 * Space Complexity:
 * - O(1): The space used by the HashMap is constant, and no additional space is required that scales with input size.
 *
 * Notes for Future Revision:
 * - Focus on the logic of adding or subtracting based on the current and next numeral.
 * - Practice identifying the key Roman numeral rules, especially the subtraction rule.
 * - This pattern of using a HashMap to map symbols to values can be useful in other similar problems.
 */
