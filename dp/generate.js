/*
 * :file description: LeetCode 118 - 杨辉三角
 * :name: \hot100\dp\generate.js
 * :leetcode: https://leetcode.cn/problems/pascals-triangle/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-06-29 14:33:36
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


