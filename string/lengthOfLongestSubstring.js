/*
 * :file description: LeetCode 3 - 无重复字符的最长子串
 * :name: \hot100\string\lengthOfLongestSubstring.js
 * :leetcode: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
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