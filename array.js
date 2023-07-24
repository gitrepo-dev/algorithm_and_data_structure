"use strict";

// 209. Minimum Size Subarray Sum
// brut force array
// const minSubArrayLen = function (target, nums) {
//   let result = [], add = 0;
//   const recursion = (start, arr, slate) => {
//     if (target <= add) {
//       if (!result.length) {
//         result.push(slate.slice());
//       } else if (result[0].length > slate.length) {
//         result.pop()
//         result.push(slate.slice());
//       }
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       if (i > start && arr[i] === arr[i - 1]) continue;
//       add += arr[i];
//       slate.push(arr[i]);
//       recursion(i + 1, arr, slate);
//       add = 0;
//       slate.pop();
//     }
//   };

//   recursion(0, nums, []);
//   return result[0]?.length || 0;
// };
// const isminSubArrayLen = minSubArrayLen(1, [1]);
// console.log(isminSubArrayLen);

// optimize slide window trick
// const minSubArrayLen = function (target, nums) {
//   let ans = nums?.length + 1,
//     window = 0,
//     left = 0;
//   for (let i = 0; i < nums.length; i++) {
//     window += nums[i];
//     while (window >= target) {
//       ans = Math.min(ans, i - left + 1);
//       window -= nums[left++];
//     }
//   }
//   return ans === nums?.length + 1 ? 0 : ans;
// };
// const isminSubArrayLen = minSubArrayLen(4, [1, 4, 4]);
// console.log(isminSubArrayLen);

// 215. Kth Largest Element in an Array
// const findKthLargest = function (nums, k) {
//   return true;
// };
// const isfindKthLargest = findKthLargest([3, 2, 1, 5, 6, 4], 2);
// console.log(isfindKthLargest);
