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
    cur = Math.max(nums[i], cur + nums[i])
    res = Math.max(res, cur)
  }
  return res
}

const testCases = [
  { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6, desc: '经典用例，子数组 [4,-1,2,1]' },
  { input: [1], expected: 1, desc: '单元素' },
  { input: [5, 4, -1, 7, 8], expected: 23, desc: '全正数，取整个数组' },
  { input: [-1], expected: -1, desc: '单个负数' },
  { input: [-2, -1], expected: -1, desc: '全负数，取最大值' },
  { input: [-2, 1], expected: 1, desc: '负数后跟正数' },
  { input: [8, -19, 5, -4, 20], expected: 21, desc: '中间断开，取 [5,-4,20]' },
]

testCases.forEach(({ input, expected, desc }, i) => {
  const result = maxSubArray(input)
  const pass = result === expected
  console.log(`case ${i + 1} [${desc}]:`, pass ? 'PASS' : `FAIL (got ${result}, expected ${expected})`)
})