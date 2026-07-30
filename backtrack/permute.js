/*
 * :file description: LeetCode 46 - 全排列
 * :leetcode: https://leetcode.cn/problems/permutations/
 */
// 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列。你可以按任意顺序返回答案。
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
