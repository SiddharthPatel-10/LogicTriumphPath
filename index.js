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

function reverseArray(arr, start, end){
  while (start< end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function leftRotateArray(arr, D){
  const n = arr.length;
  D = D % n;

  reverseArray(arr, 0, D-1);
  reverseArray(arr, D, n-1);
  reverseArray(arr, 0, n-1);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const D = 2;
leftRotateArray(arr, D);
console.log(arr); 
// time complexity : O(n)
// space complexity : O(1)