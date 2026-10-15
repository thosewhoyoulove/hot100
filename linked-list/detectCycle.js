/*
 * :file description: LeetCode 142 - 环形链表 II
 * :leetcode: https://leetcode.cn/problems/linked-list-cycle-ii/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * 若链表有环，返回环的第一个节点；无环返回 null。不能修改链表。
 * pos 只描述尾节点连回的下标（-1 表示无环），不会作为参数传入。
 *
 * 示例 1：
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：下标为 1 的节点
 *
 * 示例 2：
 * 输入：head = [1,2], pos = 0
 * 输出：下标为 0 的节点
 *
 * 示例 3：
 * 输入：head = [1], pos = -1
 * 输出：null
 *
 * 约束：
 * 节点数 [0, 10^4]。要求能用 O(1) 额外空间。
 */

function detectCycle(head) {
  // TODO: 快慢指针找相遇点，再找环入口
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break
  }
  if (!fast || !fast.next) return null
  let p = head
  while (p !== slow) {
    p = p.next
    slow = slow.next
  }
  return p
}
