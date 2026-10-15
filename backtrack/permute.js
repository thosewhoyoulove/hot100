/*
 * :file description: LeetCode 46 - 全排列
 * :leetcode: https://leetcode.cn/problems/permutations/
 *
 * 难度：中等
 *
 * 描述：
 * nums 不含重复数字，返回它的全部排列。顺序不限。
 *
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 示例 2：
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 * 示例 3：
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 * 约束：
 * 1 <= nums.length <= 6，nums 中整数互不相同。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const n = nums.length
  const res = []
  const path = []
  const used = new Array(n).fill(false)

  const dfs = () => {
    if (path.length === n) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(nums[i])
      dfs()
      path.pop()
      used[i] = false
    }
  }

  dfs()
  return res
}

/** 将排列结果规范化后比较（顺序无关） */
const normalize = arrs =>
  arrs
    .map(a => a.join(','))
    .sort()
    .join('|')

const samePermutations = (a, b) => normalize(a) === normalize(b)

const testCases = [
  {
    input: [1, 2, 3],
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
    desc: 'LeetCode 经典用例',
  },
  {
    input: [0, 1],
    expected: [
      [0, 1],
      [1, 0],
    ],
    desc: '两个元素',
  },
  {
    input: [1],
    expected: [[1]],
    desc: '单元素',
  },
]

testCases.forEach(({ input, expected, desc }, i) => {
  const result = permute(input)
  const pass = samePermutations(result, expected)
  console.log(
    `case ${i + 1} [${desc}]:`,
    pass ? 'PASS' : `FAIL (got ${JSON.stringify(result)}, expected ${JSON.stringify(expected)})`
  )
})
