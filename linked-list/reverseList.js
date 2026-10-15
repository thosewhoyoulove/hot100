/*
 * :file description: LeetCode 206 - 反转链表
 * :leetcode: https://leetcode.cn/problems/reverse-linked-list/
 *
 * 难度：简单
 *
 * 描述：
 * 给定单链表头节点 head，反转整条链表并返回新的头节点。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 * 示例 2：
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 * 示例 3：
 * 输入：head = []
 * 输出：[]
 *
 * 约束：
 * 节点数 [0, 5000]，节点值 [-5000, 5000]。迭代和递归都应能做。
 */

/** 迭代：prev / cur / next 三指针 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null
  let cur = head
  while (cur) {
    const nextTemp = cur.next
    cur.next = prev
    prev = cur
    cur = nextTemp
  }
  return prev
}
const node1 = {
  val: 1,
  next: null
}

const node2 = {
  val: 2,
  next: null
}

const node3 = {
  val: 3,
  next: null
}

const node4 = {
  val: 4,
  next: null
}

node1.next = node2
node2.next = node3
node3.next = node4


reverseList(node1)

return

/** 递归 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseListRecursive(head) {
  if (!head || !head.next) return head
  const newHead = reverseListRecursive(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const buildList = arr => {
  const dummy = new ListNode()
  let cur = dummy
  for (const val of arr) {
    cur.next = new ListNode(val)
    cur = cur.next
  }
  return dummy.next
}

const listToArray = head => {
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res
}

const testCases = [
  { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1], desc: 'LeetCode 经典用例' },
  { input: [1, 2], expected: [2, 1], desc: '两个节点' },
  { input: [], expected: [], desc: '空链表' },
  { input: [1], expected: [1], desc: '单节点' },
]

const implementations = [
  { name: '迭代三指针', fn: reverseList },
  { name: '递归', fn: reverseListRecursive },
]

implementations.forEach(({ name, fn }) => {
  console.log(`\n=== ${name} ===`)
  testCases.forEach(({ input, expected, desc }, i) => {
    const result = listToArray(fn(buildList(input)))
    const pass = result.length === expected.length && result.every((v, idx) => v === expected[idx])
    console.log(
      `case ${i + 1} [${desc}]:`,
      pass ? 'PASS' : `FAIL (got [${result}], expected [${expected}])`
    )
  })
})
