/*
 * :file description: LeetCode 1 - 两数之和
 * :name: \hot100\array\twoSum.js
 * :leetcode: https://leetcode.cn/problems/two-sum/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-06-29 21:06:08
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [i, map.get(complement)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}


function same(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  for (let k of keys) {
    if ((a[k] || 0) !== (b[k] || 0)) return false

  }
  return true
}