/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  nums1.splice(m);
  
  while (j < n) {
      if (nums1[i] > nums2[j] || nums1[i] === undefined) {
          nums1.splice(i, 0, nums2[j]);
          j++;
      }
      i++;
  }
};