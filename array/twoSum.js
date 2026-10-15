/*
 * :file description: LeetCode 1 - 两数之和
 * :name: \hot100\array\twoSum.js
 * :leetcode: https://leetcode.cn/problems/two-sum/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-06-29 21:06:08
 *
 * 难度：简单
 *
 * 描述：
 * 给定整数数组 nums 和目标值 target，找出和等于 target 的两个下标并返回。
 * 每个输入只有一组答案，同一个元素不能用两次，下标顺序不限。
 *
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：nums[0] + nums[1] = 9
 *
 * 示例 2：
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 * 示例 3：
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 * 约束：
 * nums 长度 [2, 10^4]，保证恰好有一个答案。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [i, map.get(complement)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}
