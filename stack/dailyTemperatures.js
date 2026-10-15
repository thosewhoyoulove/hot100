/*
 * :file description: LeetCode 739 - 每日温度
 * :leetcode: https://leetcode.cn/problems/daily-temperatures/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * temperatures[i] 是第 i 天的温度。返回 answer，answer[i] 表示往后第一次出现更高温度还要等几天。
 * 如果之后都不会更高，则 answer[i] = 0。
 *
 * 示例 1：
 * 输入：temperatures = [73,74,75,71,69,72,76,73]
 * 输出：[1,1,4,2,1,1,0,0]
 *
 * 示例 2：
 * 输入：temperatures = [30,40,50,60]
 * 输出：[1,1,1,0]
 *
 * 示例 3：
 * 输入：temperatures = [30,60,90]
 * 输出：[1,1,0]
 *
 * 约束：
 * 1 <= temperatures.length <= 10^5，30 <= temperatures[i] <= 100。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  // TODO: 单调递减栈
}
