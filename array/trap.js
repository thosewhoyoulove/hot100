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