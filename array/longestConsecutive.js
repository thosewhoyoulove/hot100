/*
 * :file description: LeetCode 128 - 最长连续序列
 * :name: \hot100\array\longestConsecutive.js
 * :leetcode: https://leetcode.cn/problems/longest-consecutive-sequence/
 */
//给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
const longestConsecutive = nums => {
  const set = new Set(nums)
  let maxLen = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let cur = num
      let len = 1
      while (set.has(cur + 1)) {
        len++
        cur++
      }
      maxLen = Math.max(maxLen, len)
    }
  }
  return maxLen
}

const testCases = [
  { input: [100, 4, 200, 1, 3, 2], expected: 4, desc: 'LeetCode 经典用例，序列 [1,2,3,4]' },
  { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9, desc: '较长连续序列 0~8' },
  { input: [], expected: 0, desc: '空数组' },
  { input: [1], expected: 1, desc: '单元素' },
  { input: [10, 20, 30], expected: 1, desc: '无连续，各算长度 1' },
  { input: [1, 2, 3, 4, 5], expected: 5, desc: '完整连续序列' },
  { input: [1, 1, 1, 2, 2], expected: 2, desc: '有重复元素' },
  { input: [-1, 0, 1], expected: 3, desc: '含负数连续序列' },
]

testCases.forEach(({ input, expected, desc }, i) => {
  const result = longestConsecutive(input)
  const pass = result === expected
  console.log(`case ${i + 1} [${desc}]:`, pass ? 'PASS' : `FAIL (got ${result}, expected ${expected})`)
})
