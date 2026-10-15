/*
 * :file description: LeetCode 3 - 无重复字符的最长子串
 * :name: \hot100\string\lengthOfLongestSubstring.js
 * :leetcode: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 *
 * 难度：中等
 *
 * 描述：
 * 给定字符串 s，返回不含重复字符的最长子串长度。答案必须是连续子串。
 *
 * 示例 1：
 * 输入：s = "abcabcbb"
 * 输出：3
 * 解释：最长子串是 "abc"
 *
 * 示例 2：
 * 输入：s = "bbbbb"
 * 输出：1
 *
 * 示例 3：
 * 输入：s = "pwwkew"
 * 输出：3
 * 解释：最长子串是 "wke"；"pwke" 是子序列，不算
 *
 * 约束：
 * 0 <= s.length <= 5 * 10^4，s 由英文字母、数字、符号和空格组成。
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const map = new Map()
  let left = 0
  let maxLen = 0
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1
    }
    map.set(char, right)
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring1 = s => {
  const map = new Map()
  let left = 0
  let maxLen = 0
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1
    }
    map.set(char, right)
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}