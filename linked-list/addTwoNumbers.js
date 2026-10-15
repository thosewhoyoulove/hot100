/*
 * :file description: LeetCode 2 - 两数相加
 * :name: \hot100\linked-list\addTwoNumbers.js
 * :leetcode: https://leetcode.cn/problems/add-two-numbers/
 * :author: omencao
 * :copyright: (c) 2026, Tungee
 * :date created: 2026-06-29 14:19:03
 * :last editor: omencao
 * :date last edited: 2026-06-29 14:20:33
 *
 * 难度：中等
 *
 * 描述：
 * 两个非空链表分别表示两个非负整数，数字逆序存放，每个节点一位。
 * 把两个数相加，用同样的逆序链表返回和。除了数字 0，不会有前导零。
 *
 * 示例 1：
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807
 *
 * 示例 2：
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 * 示例 3：
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 *
 * 约束：
 * 每个链表节点数 [1, 100]，节点值 0 到 9。
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode(0)
  let cur = dummy
  let carry = 0
  while (l1 || l2 || carry) {
    //所有情况（包括进位、剩余节点）都已经在循环里处理完了
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = x + y + carry
    carry = Math.floor(sum / 10)
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return dummy.next
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

const addTwoNumbers1 = (l1, l2) => {
  const dummy = new ListNode(0)
  let cur = dummy
  let carry = 0
  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    let sum = x + y + carry
    carry = Math.floor(sum / 10)
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l1.next : null
  }
  return sum
}





























