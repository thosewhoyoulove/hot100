/*
 * :file description: LeetCode 118 - 杨辉三角
 * :name: \hot100\dp\generate.js
 * :leetcode: https://leetcode.cn/problems/pascals-triangle/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-06-29 14:33:36
 *
 * 难度：简单
 *
 * 描述：
 * 生成杨辉三角的前 numRows 行。
 * 每一行首尾是 1，中间每个数等于它左上方与右上方两数之和。
 *
 * 示例 1：
 * 输入：numRows = 5
 * 输出：[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * 示例 2：
 * 输入：numRows = 1
 * 输出：[[1]]
 *
 * 约束：
 * 1 <= numRows <= 30。
 */
function generate(numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++) {
      const left = res[i - 1][j - 1]
      const right = res[i - 1][j]
      row[j] = left + right
    }
    res.push(row)
  }
  return res
}


