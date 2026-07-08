/*
 * :file description: LeetCode 283 - 移动零
 * :name: \hot100\array\moveZeroes.js
 * :leetcode: https://leetcode.cn/problems/move-zeroes/
 */
const moveZeroes = nums => {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
  console.log(nums);
}
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
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


const moveZeroes1 = nums => {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}



const moveZeroes2 = nums => {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
}