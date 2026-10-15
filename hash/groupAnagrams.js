/*
 * :file description: LeetCode 49 - 字母异位词分组
 * :name: \hot100\hash\groupAnagrams.js
 * :leetcode: https://leetcode.cn/problems/group-anagrams/
 *
 * 难度：中等
 *
 * 描述：
 * 把字符串数组里的字母异位词分到同一组。异位词是字母重排后得到的词。
 * 组内和组间顺序都不限。
 *
 * 示例 1：
 * 输入：strs = ["eat","tea","tan","ate","nat","bat"]
 * 输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * 示例 2：
 * 输入：strs = [""]
 * 输出：[[""]]
 *
 * 示例 3：
 * 输入：strs = ["a"]
 * 输出：[["a"]]
 *
 * 约束：
 * 1 <= strs.length <= 10^4，0 <= strs[i].length <= 100，只含小写字母。
 */
const groupAnagrams = (strs) => {
  const map = {}

  for (const str of strs) {
    const key = [...str].sort().join('')
    if (!map[key]) {
      map[key] = []
    }
    map[key].push(str)
  }

  return Object.values(map)
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

const groupAnagrams1 = (strs) => {
  const map = {}
  for (const str of strs) {
    const char = [...str].sort().join('')
    if (!map[char]) {
      map[char] = []
    }
    map[char].push(str)
  }
  return Object.values(map)
}