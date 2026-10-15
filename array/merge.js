/*
 * :file description: LeetCode 56 - 合并区间
 * :name: \hot100\array\merge.js
 * :leetcode: https://leetcode.cn/problems/merge-intervals/
 *
 * 难度：中等
 *
 * 描述：
 * intervals[i] = [start, end] 表示一个闭区间。合并所有重叠区间，返回能覆盖全部输入的不重叠区间。
 *
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 *
 * 示例 2：
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：端点相接也算重叠
 *
 * 约束：
 * 1 <= intervals.length <= 10^4，0 <= start <= end <= 10^4。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  // 0. 边界情况：没有区间直接返回空数组
  if (intervals.length === 0) return []

  // 1. 先按区间的起点 start 排序
  // 目的：让可能重叠的区间“挨在一起”
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals, 'intervals');

  const res = [] // 用来存最终合并后的区间

  // 2. 遍历每一个区间
  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i] // 当前区间
    const start = cur[0]
    const end = cur[1]

    // 3. 如果 res 为空，直接放入第一个区间
    if (res.length === 0) {
      res.push(cur)
      continue
    }

    // 4. 取 res 中最后一个已经合并好的区间
    const last = res[res.length - 1]

    // last = [lastStart, lastEnd]

    // 5. 判断是否重叠
    // 不重叠条件：当前 start > 上一个 end
    if (start > last[1]) {
      // 没有重叠，直接加入
      res.push(cur)
    } else {
      // 6. 有重叠 → 合并
      // 更新上一个区间的右边界
      last[1] = Math.max(last[1], end)
    }
  }

  return res
}
const arr = [[1, 3], [15, 18], [2, 6], [8, 10],]
console.log(merge(arr));

























/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge1(intervals) {
  if (intervals.length === 0) reutrn[];
  intervals.sort(a, b => a[0] - b[0])
  const res = []
  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i]
    if (!res.length) {
      res.push(cur)
      continue
    }
    const last = res[res.length - 1]
    if (cur[0] > last[1]) {
      res.push(cur)
    } else {
      last[1] = Math.max(last[1], cur[1])
    }
  }
  return res
}