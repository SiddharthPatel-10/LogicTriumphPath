function intToRoman(num) {
    // List of Roman numerals and their integer values
    const romanMap = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";

    // Iterate over the mapping
    for (const [symbol, value] of romanMap) {
        // While the value can be subtracted from num, append the symbol to the result
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"

/**
 * Tips and Tricks:
 * 1. Use a greedy approach by subtracting the largest possible Roman numeral value first.
 * 2. Create a mapping that includes both standard and subtractive Roman numerals (e.g., M, CM, D, CD, etc.).
 * 3. Ensure that the mapping is ordered from highest to lowest so that the largest value is always subtracted first.
 *
 * Time Complexity:
 * - O(1): Since the maximum input value is 3999, the number of iterations is constant and independent of the input size.
 *
 * Space Complexity:
 * - O(1): The space used by the Roman numeral string is proportional to the length of the Roman numeral, which is also bounded.
 *
 * Notes for Future Revision:
 * - Remember that subtractive notation must be handled by the mapping (e.g., IV for 4, IX for 9).
 * - Practice converting various numbers to Roman numerals to solidify understanding of the rules.
 * - This pattern of mapping and greedy subtraction is useful for similar problems that involve conversion between different numeral systems.
 */
