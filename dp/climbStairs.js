/*
 * :file description: LeetCode 70 - 爬楼梯
 * :name: \hot100\dp\climbStairs.js
 * :leetcode: https://leetcode.cn/problems/climbing-stairs/
 *
 * 难度：简单
 *
 * 描述：
 * 爬 n 阶楼梯，每次只能爬 1 或 2 阶。返回有多少种不同爬法。
 *
 * 示例 1：
 * 输入：n = 2
 * 输出：2
 * 解释：1+1，或一次爬 2 阶
 *
 * 示例 2：
 * 输入：n = 3
 * 输出：3
 * 解释：1+1+1，1+2，2+1
 *
 * 约束：
 * 1 <= n <= 45。
 */
const climbStairs = n => {
  if (n <= 2) return n
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}



const CERT_WORD = { institution: '证书', trademark: '商标', patent: '专利' };
const CERT_UNIT = { institution: '份', trademark: '个', patent: '个' };
const COOPERATION_COUNT_KEY = { institution: 'certCooperationCount', trademark: 'tmCooperationCount', patent: 'patentCooperationCount' };
const NESTED_KEY = { institution: 'certNested', trademark: 'tmNested', patent: 'patentNested' };
const NESTED_TOTAL_KEY = { institution: 'certNestedTotal', trademark: 'tmNestedTotal', patent: 'patentNestedTotal' };
const STATUS_STATS_KEY = { trademark: 'tmCooperationStatusStats', patent: 'patentCooperationStatusStats' };
const STATUS_STATS_LABEL = { trademark: '合作商标状态', patent: '合作专利状态' };
const certWord = CERT_WORD[searchType] || '证书';
const certUnit = CERT_UNIT[searchType] || '份';
const cooperationCount = institution[COOPERATION_COUNT_KEY[searchType] || 'certCooperationCount'];

const nestedList = institution[NESTED_KEY[searchType] || 'certNested'];
const nestedTotal = institution[NESTED_TOTAL_KEY[searchType] || 'certNestedTotal'];
const hasCertNested = Array.isArray(nestedList);



const climbStairs1 = n => {
  if (n <= 2) return n
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}