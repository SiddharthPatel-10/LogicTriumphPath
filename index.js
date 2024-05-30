// Q1 Write a JavaScript function to find the largest element in an array of integers without using any built-in methods like Math.max() or sorting algorithms. Optimize your solution for time complexity.

// const array = [3, 7, 12, 8, 5];
// const largest = Math.max(...array);
// console.log(largest);

// //Given an array Arr of size N, print the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

// const arr = [1, 2, 4, 7, 7, 5];

// Q2 check if an array is sorted, you can iterate through the array and compare each element with its adjacent element.

// const sortedArray = [1, 5, 7, 13, 212];
// const unsortedArray = [1, 5, 7, 3, 12];
// function isArraySorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isArraySorted(sortedArray));
// console.log(isArraySorted(unsortedArray));

// Q.3 You are given an array of integers. Left rotate the array by one place.

// function leftRotateByOne(nums) {
//   if (nums.length <= 1) return nums;
//   const firstElement = nums.shift();
//   nums.push(firstElement);
//   return nums;
// }

// const nums1 = [1, 2, 3, 4, 5];
// console.log(leftRotateByOne(nums1));

// const nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(leftRotateByOne(nums2));

// Q.4  You are given an array of integers. Left rotate the array by D place.

// function reverseArray(arr, start, end){
//   while (start< end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// function leftRotateArray(arr, D){
//   const n = arr.length;
//   D = D % n;

//   reverseArray(arr, 0, D-1);
//   reverseArray(arr, D, n-1);
//   reverseArray(arr, 0, n-1);
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const D = 2;
// leftRotateArray(arr, D);
// console.log(arr);
// time complexity : O(n)
// space complexity : O(1)

// Q.5 move all the zero's at the end of the Array
// function moveZerosToEnd(arr) {
//   let nonZeroElements = [];
//   let zeroCount = 0;

//   // Iterate through the array and segregate non-zero elements and count zeros
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== 0) {
//           nonZeroElements.push(arr[i]);
//       } else {
//           zeroCount++;
//       }
//   }

//   // Add the counted zeros to the end of the non-zero elements array
//   while (zeroCount > 0) {
//       nonZeroElements.push(0);
//       zeroCount--;
//   }

//   return nonZeroElements;
// }

// // Example usage:
// let arr = [0, 1, 0, 3, 12];
// let result = moveZerosToEnd(arr);
// console.log(result); // Output: [1, 3, 12, 0, 0]

//time complexity: O(n)
//space complexity: O(n)

//Q.6 Linear search on an Array

// function linearSearch(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [1, 2, 3, 4, 5, 6, 8];
// n = 6;
// console.log(linearSearch(arr, n));  //Output: 5
//time complexity: O(n)
//space complexity: O(1)


// Q.7 Union of two sroted Array
// function unionOfSortedArrays(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//           result.push(arr1[i]);
//           i++;
//       } else if (arr1[i] > arr2[j]) {
//           result.push(arr2[j]);
//           j++;
//       } else {
//           result.push(arr1[i]);
//           i++;
//           j++;
//       }
//   }

//   // Add remaining elements from arr1
//   while (i < arr1.length) {
//       result.push(arr1[i]);
//       i++;
//   }

//   // Add remaining elements from arr2
//   while (j < arr2.length) {
//       result.push(arr2[j]);
//       j++;
//   }

//   return result;
// }

// // Example usage:
// const arr1 = [1, 3, 5, 7, 9, 11, 14, 16];
// const arr2 = [2, 4, 6, 8, 10];
// console.log(unionOfSortedArrays(arr1, arr2));
//time complexity: O(m + n)
//space complexity: O(min(m, n))



// Q.8 Find missing number and repeating number in an array
function findMissingAndRepeating(arr) {
    const n = arr.length;
    let sum = 0, sumOfSquares = 0;
    let expectedSum = n * (n + 1) / 2;
    let expectedSumOfSquares = n * (n + 1) * (2 * n + 1) / 6;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        sumOfSquares += arr[i] * arr[i];
    }

    let diff = expectedSum - sum; // This is missing - repeating
    let diffSquares = expectedSumOfSquares - sumOfSquares; // This is missing^2 - repeating^2

    // From diffSquares = (missing - repeating) * (missing + repeating)
    let sumOfMissingAndRepeating = diffSquares / diff;

    let missing = (diff + sumOfMissingAndRepeating) / 2;
    let repeating = missing - diff;

    return {
        missing: missing,
        repeating: repeating
    };
}

// Example usage:
const arr = [4, 3, 6, 2, 1, 1];
const result = findMissingAndRepeating(arr);
console.log(`Missing number: ${result.missing}`);
console.log(`Repeating number: ${result.repeating}`);
//time complexity: O(n)
//space complexity: O(1)