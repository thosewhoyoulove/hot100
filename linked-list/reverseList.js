/*
 * :file description: LeetCode 206 - 反转链表
 * :leetcode: https://leetcode.cn/problems/fan-zhuan-lian-biao/
 */
// 给你单链表的头节点 head，反转链表并返回反转后的头节点。

/** 迭代：prev / cur / next 三指针 */
function reverseList(head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

/** 递归 */
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
