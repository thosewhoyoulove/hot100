/*
 * :file description: LeetCode 238 - 除自身以外数组的乘积
 * :leetcode: https://leetcode.cn/problems/product-of-array-except-self/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * 返回数组 answer，answer[i] 等于 nums 中除 nums[i] 以外所有元素的乘积。
 * 不能用除法，要在 O(n) 时间内完成。任意元素的前缀积、后缀积都在 32 位整数范围内。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,4]
 * 输出：[24,12,8,6]
 *
 * 示例 2：
 * 输入：nums = [-1,1,0,-3,3]
 * 输出：[0,0,9,0,0]
 *
 * 约束：
 * 2 <= nums.length <= 10^5，-30 <= nums[i] <= 30。
 * 输出数组不算额外空间，可以做到 O(1) 额外空间。
 */
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
