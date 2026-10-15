/*
 * :file description: LeetCode 128 - 最长连续序列
 * :name: \hot100\array\longestConsecutive.js
 * :leetcode: https://leetcode.cn/problems/longest-consecutive-sequence/
 *
 * 难度：中等
 *
 * 描述：
 * 给定未排序的整数数组 nums，返回最长连续数字序列的长度。
 * 序列里的数不必在原数组中相邻。要求 O(n) 时间。
 *
 * 示例 1：
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长连续序列是 [1,2,3,4]
 *
 * 示例 2：
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 * 约束：
 * 0 <= nums.length <= 10^5，-10^9 <= nums[i] <= 10^9。
 */
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
