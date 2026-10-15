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
 *
 * 难度：中等
 *
 * 描述：
 * 把数组 nums 向右轮转 k 位，k 为非负整数。尽量原地完成。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,4,5,6,7], k = 3
 * 输出：[5,6,7,1,2,3,4]
 *
 * 示例 2：
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 *
 * 约束：
 * 1 <= nums.length <= 10^5，0 <= k <= 10^5。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
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