/*
 * :file description: LeetCode 238 - 除自身以外数组的乘积
 * :leetcode: https://leetcode.cn/problems/product-of-array-except-self/
 * :status: todo
 */
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
function productExceptSelf(nums) {
  const n = nums.length
  const answer = []
  let prefix = 1
  for (let i = 0; i < n; i++) {
    answer[i] = prefix
    prefix *= nums[i]
  }
  let suffix = 1
  for (let j = n - 1; j >= 0; j--) {
    answer[j] *= suffix
    suffix *= nums[j]
  }
  return answer
}

const testCases = [
  { input: [1, 2, 3, 4], expected: [24, 12, 8, 6], desc: 'LeetCode 经典用例' },
  { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0], desc: '含 0' },
  { input: [2, 3], expected: [3, 2], desc: '两个元素' },
  { input: [1], expected: [1], desc: '单元素' },
]

testCases.forEach(({ input, expected, desc }, i) => {
  const result = productExceptSelf(input)
  const pass = result.length === expected.length && result.every((v, idx) => v === expected[idx])
  console.log(`case ${i + 1} [${desc}]:`, pass ? 'PASS' : `FAIL (got [${result}], expected [${expected}])`)
})
