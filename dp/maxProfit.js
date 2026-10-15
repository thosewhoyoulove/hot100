/*
 * :file description: LeetCode 121 - 买卖股票的最佳时机
 * :leetcode: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * :status: todo
 *
 * 难度：简单
 *
 * 描述：
 * prices[i] 是第 i 天的股价。只能买一次、之后卖一次（卖出必须在买入之后）。
 * 返回最大利润；如果怎么买卖都不会赚钱，返回 0。
 *
 * 示例 1：
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：5
 * 解释：第 2 天价格 1 买入，第 5 天价格 6 卖出
 *
 * 示例 2：
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 *
 * 约束：
 * 1 <= prices.length <= 10^5，0 <= prices[i] <= 10^4。
 */

function maxProfit(prices) {
  // TODO: 一次遍历，维护历史最低价
  let minPrice = Infinity
  let maxProfit = 0
  for (const price of prices) {
    minPrice = Math.min(price, minPrice)
    maxProfit = Math.max(maxProfit, price - minPrice)
  }
  return maxProfit
}
