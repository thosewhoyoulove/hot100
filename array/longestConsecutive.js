/*
 * :file description: LeetCode 128 - 最长连续序列
 * :name: \hot100\array\longestConsecutive.js
 * :leetcode: https://leetcode.cn/problems/longest-consecutive-sequence/
 */
const longestConsecutive = nums => {
  const set = new Set(nums)
  let maxLen = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let cur = num
      let len = 1
      while (set.has(cur + 1)) {
        cur++
        len++
      }
      maxLen = Math.max(len, maxLen)
    }
  }
  return maxLen
}

const longestConsecutive1 = nums => {
  const set = new Set(nums)
  let maxLen = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let cur = num
      let len = 1
      while (set.has(cur + 1)) {
        cur++
        len++
      }
      maxLen = Math.max(len, maxLen)
    }
  }
  return maxLen
}