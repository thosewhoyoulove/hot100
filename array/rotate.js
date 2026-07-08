/*
 * :file description: LeetCode 189 - 旋转数组
 * :name: \hot100\array\rotate.js
 * :leetcode: https://leetcode.cn/problems/rotate-array/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-07-03 16:02:42
 * :last editor: omencao
 * :date last edited: 2026-07-03 17:45:24
 * :Author: desktop-uknn8b7
 */
function rotate(nums, k) {
  const n = nums.length
  if (n === 0) return
  k = k % n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
}
function reverse(nums, l, r) {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}