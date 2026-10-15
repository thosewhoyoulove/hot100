/*
 * :file description: LeetCode 42 - 接雨水
 * :name: \hot100\array\trap.js
 * :leetcode: https://leetcode.cn/problems/trapping-rain-water/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-07-01 20:33:27
 * :Author: desktop-uknn8b7
 *
 * 难度：困难
 *
 * 描述：
 * height[i] 表示宽度为 1 的柱子高度。按这个高度图下雨后，能接住多少单位雨水。
 *
 * 示例 1：
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 *
 * 示例 2：
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 * 约束：
 * 1 <= height.length <= 2 * 10^4，0 <= height[i] <= 10^5。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let res = 0
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        res += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        res += rightMax - height[right]
      }
      right--
    }
  }
  return res
}










/**
 * @param {number[]} height
 * @return {number}
 */
function trap1(height) {
  let l = 0
  let r = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let res = 0
  while (l < r) {
    if (height[l] <= height[r]) {
      if (leftMax < height[l]) leftMax = height[l]
      else res += leftMax - height[l]
      l++
    } else {
      if (rightMax < height[r]) rightMax = height[r]
      else res += rightMax - height[r]
      r--
    }
  }
  return res
}


/**
 * @param {number[]} height
 * @return {number}
 */
function trap2(height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let res = 0
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left]
      else res += leftMax - height[left]
      left++
    } else {
      if (height[right] >= rightMax) rightMax = height[right]
      else res += rightMax - height[right]
      right--
    }
  }
  return res
}