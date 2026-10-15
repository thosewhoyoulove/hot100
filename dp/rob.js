/*
 * :file description: LeetCode 198 - 打家劫舍
 * :leetcode: https://leetcode.cn/problems/house-robber/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * nums[i] 是第 i 间房屋的现金。相邻房屋同一晚被偷会报警。
 * 返回一夜之内能偷到的最高金额。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：偷第 1 间和第 3 间，1 + 3 = 4
 *
 * 示例 2：
 * 输入：nums = [2,7,9,3,1]
 * 输出：12
 * 解释：2 + 9 + 1 = 12
 *
 * 约束：
 * 1 <= nums.length <= 100，0 <= nums[i] <= 400。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  // TODO: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[nums.length - 1]
}
