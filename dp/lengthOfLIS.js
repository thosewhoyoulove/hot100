/*
 * :file description: LeetCode 300 - 最长递增子序列
 * :leetcode: https://leetcode.cn/problems/longest-increasing-subsequence/
 *
 * 难度：中等
 *
 * 描述：
 * 返回 nums 中最长严格递增子序列的长度。
 * 子序列可以不连续，但必须保持原有相对顺序。
 *
 * 示例 1：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列之一是 [2,3,7,101]
 *
 * 示例 2：
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 *
 * 示例 3：
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 *
 * 约束：
 * 1 <= nums.length <= 2500，-10^4 <= nums[i] <= 10^4。
 * 进阶：时间复杂度降到 O(n log n)。
 */
// O(n log n) 的 tails + 二分与 React 列表 diff 中「最少移动节点」的思路同源。

/** 写法 1：DP O(n²)，dp[i] = 以 nums[i] 结尾的 LIS 长度 */
function lengthOfLISDP(nums) {
  if (nums.length === 0) return 0
  const dp = new Array(nums.length).fill(1)
  let res = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}

/** 在 tails 中二分找第一个 >= target 的下标 */
const lowerBound = (arr, target) => {
  let lo = 0
  let hi = arr.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] < target) lo = mid + 1
    else hi = mid
  }
  return lo
}

/** 写法 2：贪心 + 二分 O(n log n)，tails[i] = 长度为 i+1 的 LIS 的最小末尾 */
function lengthOfLIS(nums) {
  const tails = []
  for (const num of nums) {
    const pos = lowerBound(tails, num)
    if (pos === tails.length) tails.push(num)
    else tails[pos] = num
  }
  return tails.length
}

const testCases = [
  {
    input: [10, 9, 2, 5, 3, 7, 101, 18],
    expected: 4,
    desc: 'LeetCode 经典用例，[2,3,7,101]',
  },
  {
    input: [0, 1, 0, 3, 2, 3],
    expected: 4,
    desc: 'LeetCode 示例 2，[0,1,2,3]',
  },
  { input: [7, 7, 7, 7], expected: 1, desc: '全相同，严格递增长度为 1' },
  { input: [1], expected: 1, desc: '单元素' },
  { input: [], expected: 0, desc: '空数组' },
  { input: [1, 3, 6, 7, 9, 4, 10, 5, 6], expected: 6, desc: '较长序列' },
]

const implementations = [
  { name: 'DP O(n²)', fn: lengthOfLISDP },
  { name: '贪心 + 二分 O(n log n)', fn: lengthOfLIS },
]

implementations.forEach(({ name, fn }) => {
  console.log(`\n=== ${name} ===`)
  testCases.forEach(({ input, expected, desc }, i) => {
    const result = fn(input)
    const pass = result === expected
    console.log(
      `case ${i + 1} [${desc}]:`,
      pass ? 'PASS' : `FAIL (got ${result}, expected ${expected})`
    )
  })
})
