/*
 * :file description: LeetCode 53 - 最大子数组和
 * :name: \hot100\array\maxSubArray.js
 * :leetcode: https://leetcode.cn/problems/maximum-subarray/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-07-01 20:33:32
 * :last editor: omencao
 * :date last edited: 2026-07-02 15:10:55
 * :Author: desktop-uknn8b7
 */


function maxSubArray(nums) {
  let cur = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], nums[i] + cur)
    res = Math.max(res, cur)
  }
  return res
}


function maxSubArray(nums) {
  let curr = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], nums[i] + curr)
    res = Math.max(res, curr)
  }
  return res
}