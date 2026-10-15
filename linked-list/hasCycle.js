/*
 * :file description: LeetCode 141 - 环形链表
 * :leetcode: https://leetcode.cn/problems/linked-list-cycle/
 * :status: todo
 *
 * 难度：简单
 *
 * 描述：
 * 判断链表是否有环。若沿 next 能再次回到某个已访问节点，则有环。
 * pos 只用来描述环的入口下标（-1 表示无环），不会作为参数传入。
 *
 * 示例 1：
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：尾节点连回下标 1
 *
 * 示例 2：
 * 输入：head = [1,2], pos = 0
 * 输出：true
 *
 * 示例 3：
 * 输入：head = [1], pos = -1
 * 输出：false
 *
 * 约束：
 * 节点数 [0, 10^4]。要求能用 O(1) 额外空间判断。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  // TODO: 快慢指针
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
